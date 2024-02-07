import React from 'react';
import symbol from "/symbol.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="text-white text-center mt-[150px]">
      <div className="flex justify-center gap-[60px] text-slate-300">
        <div>
          <h2 className="mb-3 text-slate-200 text-lg font-semibold">
            Toy Project</h2>
          <ul>
            <li>Login</li>
            <li>Mypage</li>
            <li>Show current time</li>
            <li>Absence Application</li>
            <li>Notice Gallery</li>
            <li>Filter Absence Items</li>
            <li>Logout</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-slate-200 text-lg font-semibold">
            Proud Things</h2>
          <ul>
            <li>Use Sanity</li>
            <li>Use Firebase</li>
            <li>Pagenation</li>
            <li>Skeleton</li>
            <li>Loading Animation</li>
            <li>Responsive Design</li>
            <li>Design Details</li>
            <li>Modal</li>
            <li>Toggle</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-slate-200 text-[18px] font-semibold">
            Group Members</h2>
          <ul>
            <li className="hover:text-slate-500"><a href="https://github.com/mj950313/" target="_blank" rel="noopener noreferrer">MinJae Kim</a></li>
            <li className="hover:text-slate-500"><a href="https://github.com/hyunsunglimm" target="_blank" rel="noopener noreferrer">HyeonSeong Lim</a></li>
            <li className="hover:text-slate-500"><a href="https://github.com/Lee-donggeun" target="_blank" rel="noopener noreferrer">DongGeun Lee</a></li>
            <li className="hover:text-slate-500"><a href="https://github.com/Now-h" target="_blank" rel="noopener noreferrer">JaeHyeok Lee</a></li>
          </ul>
        </div>
      </div>
      {/* 흰색 수평선 */}
      <div className="relative w-3/6 mx-auto mt-12">
        <hr className="border-b-[1px] border-slate-400/30 mb-8" />
      </div>
      {/* 로고 */}
      <div className="flex items-center justify-center mb-20">
      <Link to="/" onClick={scrollToTop} 
        className="flex items-center font-bold text-[20px] uppercase text-slate-300 hover:text-slate-500 transition">
        <img className="w-[35px] mr-2"src={symbol}
          alt="intranet five symbol"/>
        <p>© INTRANET FIVE</p>
      </Link>
      </div>
    </div>
  );
}

export default Footer;
