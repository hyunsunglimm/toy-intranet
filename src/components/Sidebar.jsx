import { Link } from "react-router-dom";

export default function Sidebar() {
  const sidebarHeight = `${window.innerHeight - 80}px`;
  return (
    <div
      style={{ height: sidebarHeight }}
      className="sticky top-[80px] bg-blue-50 w-[300px] z-10 border-r-[1px] border-gray-200 shrink-0"
    >
      <div className="flex flex-col justify-between p-8 h-full">
        <div>
          <p>페이지</p>
          <ul className="p-4">
            <li>
              <Link to="/mypage">page1</Link>
            </li>
            <li>
              <Link to="/mypage">page2</Link>
            </li>
            <li>
              <Link to="/mypage">page3</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>기타기능</p>
          <ul className="p-4">
            <li>
              <Link to="/mypage">설정</Link>
            </li>
            <li>
              <Link to="/mypage">알림</Link>
            </li>
            <li>
              <Link to="/mypage">로그아웃</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
