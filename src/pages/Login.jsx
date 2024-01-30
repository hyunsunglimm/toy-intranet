import { useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  function signInHandler() {
    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const contentHeight = `${window.innerHeight - 80}px`;

  const inputStyle = "border-[1px] border-gray-200 w-full rounded-md py-1 px-2";

  return (
    <div
      style={{ height: contentHeight }}
      className="flex w-full justify-center items-center"
    >
      <div className="w-[400px] rounded-lg p-4 bg-white flex flex-col gap-4">
        <p className="text-center font-bold">Welcome to Intranet Five !</p>
        <div>
          <p className="mb-2 text-gray-400">email</p>
          <input className={inputStyle} ref={emailRef} type="email" />
        </div>
        <div>
          <p className="mb-2 text-gray-400">password</p>
          <input className={inputStyle} ref={passwordRef} type="password" />
        </div>
        <Link
          className="text-center text-sm text-gray-300 hover:underline"
          to="/signup"
        >
          아직 직원등록을 안하셨나요 ?
        </Link>
        <button
          onClick={signInHandler}
          className="w-full text-center bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition"
        >
          로그인
        </button>
      </div>
    </div>
  );
}

// 로그인 수정
