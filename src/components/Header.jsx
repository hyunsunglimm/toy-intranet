import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import Modal from "./Modal";
import Timer from "./Timer";
import { DataContext } from "../context/DataContext";
import { updateEmployee } from "../sanity/employee";
import Toggle from "./Toggle";

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
    <section className="sticky top-0 h-[80px] z-20 flex justify-between items-center px-12 backdrop-blur-md backdrop-sepia-0 bg-white/5 text-white">
      <Link
        to="/"
        className="font-bold text-[24px] uppercase hover:text-blue-400 transition"
      >
        intranet five
      </Link>
      {loginUser && (
        <div className="flex justify-end items-center">
          <Timer
            openModal={openModal}
            className="hover:text-blue-400 transition cursor-pointer"
          />
          <div
            className="ml-8"
            onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
          >
            <div className="flex items-center gap-4 hover:text-blue-400 transition cursor-pointer ml-4">
              <p>{loginUser?.name}</p>
              <img
                className="w-[50px] h-[50px] object-cover rounded-full"
                src={loginUser?.image}
                alt="demo-icon"
              />
            </div>
            <div
              className={`fixed flex-col top-[100px] right-[20px] bg-white rounded-sm ${
                dropdownIsOpen ? "flex" : "hidden"
              }`}
            >
              <Link
                to={`/employee/${loginUser.id}`}
                className="py-2 px-12 hover:text-blue-400 hover:bg-blue-100 transition"
              >
                마이페이지
              </Link>
              <button
                className="py-2 px-12 hover:text-blue-400 hover:bg-blue-100 transition"
                onClick={signOutHandler}
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      )}
      {!loginUser && (
        <Link to="/login" className="p-2 border-2 rounded-lg">
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
            className="w-[200px] h-[200px] object-cover"
          />
          <Timer />
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
