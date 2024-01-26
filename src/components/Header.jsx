import { Link } from "react-router-dom";
import icon from "/icon.png";

export default function Header() {
  return (
    <section className="sticky top-0 h-[80px] z-20 flex justify-between items-center px-12 bg-white">
      <div className="w-[300px]">
        <Link to="/" className="font-bold text-[24px]">
          Logo
        </Link>
      </div>
      <input className="w-[400px] py-2 rounded-lg border" />
      <div className="flex justify-end items-center w-[300px] gap-4">
        <p>현재 시간(컴포넌트화)</p>
        <p>username</p>
        <img className="w-[50px]" src={icon} alt="demo-icon" />
      </div>
    </section>
  );
}
