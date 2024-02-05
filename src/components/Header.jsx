import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import Modal from "./Modal";
import Timer from "./Timer";
import { DataContext } from "../context/DataContext";
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

  return (
    <section className="sticky top-0 h-[80px] z-20 flex justify-between items-center px-12 bg-white">
      <Link to="/" className="font-bold text-[24px]">
        Logo
      </Link>
      {loginUser && (
        <div className="flex justify-end items-center gap-4 relative">
          <Timer openModal={openModal} />
          <Modal ref={modalRef}>
            <div className="bg-white w-250 h-150 p-5">
              <Timer />
              <p>토글 형태의 근무 시작/종료 스위치 구현</p>
            </div>
          </Modal>
          <div
            onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <p>{loginUser?.name}</p>
              <img
                className="w-[50px] h-[50px] object-cover rounded-full"
                src={loginUser?.image}
                alt="demo-icon"
              />
            </div>
            <div
              className={`absolute top-[80px] bg-white ${
                !dropdownIsOpen && "hidden"
              }`}
            >
              <Link to={`/employee/${loginUser.id}`}>마이페이지</Link>
              <button onClick={signOutHandler}>로그아웃</button>
            </div>
          </div>
        </div>
      )}
      {!loginUser && (
        <Link to="/login" className="p-2 border-2 rounded-lg">
          Login
        </Link>
      )}
    </section>
  );
}
