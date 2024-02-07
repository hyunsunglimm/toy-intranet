import React from 'react';
import symbol from "/symbol.png";

const Footer = () => {
  return (
    <div className="text-white text-center mt-20">
      <div className="flex justify-center gap-10">
        <div>
          <h2 className="mb-3">회사 정보</h2>
          <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3">저작권 정보</h2>
          <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3">연락처</h2>
          <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
          </ul>
        </div>
      </div>
      {/* 흰색 수평선 */}
      <div className="relative w-3/6 mx-auto mt-12">
        <hr className="border-b-[1px] border-slate-400/30 mb-8" />
      </div>
      {/* 로고 */}
      <div className="flex justify-center mb-20">
        <img src={symbol} alt="Symbol" className="h-10 w-10" />
      </div>
    </div>
  );
}

export default Footer;

