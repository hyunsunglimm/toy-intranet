import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export default function Sidebar() {
  const navigate = useNavigate();
  const sidebarHeight = `${window.innerHeight - 80}px`;

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
    <div
      style={{ height: sidebarHeight }}
      className="sticky top-[80px] bg-blue-50 w-[300px] z-10 border-r-[1px] border-gray-200 shrink-0"
    >
      <div className="flex flex-col justify-between p-8 h-full">
        <div>
          <p>페이지</p>
          <ul className="p-4">
            <li>
              <Link to="/management">직원 관리</Link>
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
              <button onClick={signOutHandler}>로그아웃</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
