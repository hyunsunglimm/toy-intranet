import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import Modal from "./Modal";
import Timer from "./Timer";
import { DataContext } from "../context/DataContext";
import { updateEmployee } from "../sanity/employee";
import Toggle from "./Toggle";
import { buttonStyle } from "../style/button";
import symbol from "/symbol.png";

export default function Header() {
  const { loginUser } = useContext(DataContext);

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const navigate = useNavigate();

  const modalRef = useRef();

  function openModal() {
    modalRef.current.open();
  }

  function signOutHandler() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleChange = () => {
    updateEmployee(loginUser.id, "isWorking", !loginUser.isWorking);
  };

  return (
    <section className="sticky top-0 h-[80px] z-20 flex justify-between items-center px-12 backdrop-blur-sm text-white border-b-[1px] border-slate-400/30">
      <Link
        to="/"
        className="flex items-center font-bold text-[24px] uppercase text-slate-300 hover:text-slate-500 transition"
      >
        <img
          className="w-[50px] mr-2"
          src={symbol}
          alt="intranet five symbol"
        />
        <p>intranet five</p>
      </Link>
      {loginUser && (
        <div className="flex justify-end items-center">
          <Timer
            openModal={openModal}
            className="text-slate-300 hover:text-slate-500 transition cursor-pointer text-lg flex items-center gap-2.5"
          />
          <div
            className="ml-8"
            onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
          >
            <div className="flex items-center gap-4 text-slate-300 hover:text-slate-500 transition cursor-pointer ml-4">
              <p className="text-lg">{loginUser?.name}</p>
              <img
                className="w-[50px] h-[50px] object-cover rounded-full bg-white/30"
                src={loginUser?.image}
                alt={`${loginUser.name}님의 프로필`}
              />
            </div>
            <div
              className={`fixed flex-col top-[100px] text-slate-300 rounded-md right-[20px] bg-white/5 border-[1px] border-slate-400/30 ${
                dropdownIsOpen ? "flex" : "hidden"
              }`}
            >
              <Link
                to={`/employee/${loginUser.id}`}
                className="py-4 px-12 border-b-[1px] border-slate-400/30 hover:bg-white/10 transition rounded-t-md"
              >
                마이페이지
              </Link>
              <button
                className="py-4 px-12 hover:bg-white/10 transition rounded-b-md"
                onClick={signOutHandler}
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      )}
      {!loginUser && (
        <Link to="/login" className={buttonStyle}>
          Login
        </Link>
      )}
      <Modal ref={modalRef}>
        <div className="flex flex-col items-center gap-4">
          <p className="text-[20px] font-bold uppercase">
            {loginUser?.department}
          </p>
          <img
            src={loginUser?.image}
            alt={`${loginUser?.name}의 프로필사진`}
            className="w-[200px] h-[200px] object-cover rounded-lg"
          />
          <div className="w-full flex justify-between">
            <p>현재시간</p>
            <Timer />
          </div>
          <div className="w-full flex justify-between">
            <p>근무시간</p>
            <p>{loginUser?.workingHours}</p>
          </div>
          <p>
            {loginUser?.name}님은 현재{" "}
            {loginUser?.isWorking ? "근무중" : "부재중"}
            입니다.
          </p>
          <Toggle isChecked={loginUser?.isWorking} onChange={handleChange} />
        </div>
      </Modal>
    </section>
  );
}
