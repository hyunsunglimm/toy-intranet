import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useContext, useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import Timer from "./Timer";
import { DataContext } from "../context/DataContext";

export default function Header() {
  const { loginUser } = useContext(DataContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

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

  const goToMyPage = () => {
    navigate(`/employee/${loginUser.id}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target.className.indexOf("relative") === -1
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="sticky top-0 h-[80px] z-20 flex justify-between items-center px-12 bg-white">
      <Link to="/" className="font-bold text-[24px]">
        Logo
      </Link>
      <input
        className="w-[400px] py-2 rounded-lg border px-4 absolute top-[19px] left-1/2 translate-x-[-50%]"
      />
      {!loginUser ? (
        <Link to="/login" className="p-2 border-2 rounded-lg">
          Login
        </Link>
      ) : (
        <div className="relative flex justify-end items-center gap-4">
          <Timer />
          <Modal />
          <div
            className="flex items-center gap-4 relative"
            onClick={handleDropdownToggle}
            ref={dropdownRef}
          >
            <p  onClick={handleDropdownToggle}
                ref={dropdownRef}>
                {loginUser?.name}</p>
            <img
              className="w-[50px] h-[50px] object-cover rounded-full"
              src={loginUser?.image}
              alt="demo-icon"
              onClick={handleDropdownToggle}
              ref={dropdownRef}
            />
          </div>
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-[140px] w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" ref={dropdownRef}>
              <ul className="p-4">
                <li>
                  <button onClick={goToMyPage}>마이페이지</button>
                </li>
                <li style={{ marginTop: '20px' }}>
                  <button onClick={signOutHandler}>로그아웃</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
