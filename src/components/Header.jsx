import { Link } from "react-router-dom";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Modaltest from "./Modal";
import Timer from "./Timer";

export default function Header() {
  const { loginUser } = useContext(EmployeeContext);

  return (
    <section className="sticky top-0 h-[80px] z-20 flex justify-between items-center px-12 bg-white relative">
      <Link to="/" className="font-bold text-[24px]">
        Logo
      </Link>
      <input className="w-[400px] py-2 rounded-lg border px-4 absolute top-[19px] left-1/2 translate-x-[-50%]" />
      {!loginUser ? (
        <Link to="/login" className="p-2 border-2 rounded-lg">
          Login
        </Link>
      ) : (
        <div className="flex justify-end items-center gap-4">
          <p><Timer /></p>
          <p className="flex justify-center items-center"><Modaltest /></p>
          <Link to="/mypage" className="flex items-center gap-4">
            <p>{loginUser?.name}</p>
            <img
              className="w-[50px] h-[50px] object-cover rounded-full"
              src={loginUser?.image}
              alt="demo-icon"
            />
          </Link>
        </div>
      )}
    </section>
  );
}
