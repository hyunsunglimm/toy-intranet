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

  const inputStyle = "border-[1px] border-gray-200 w-full rounded-md p-1";

  return (
    <div
      style={{ height: contentHeight }}
      className="flex w-full justify-center items-center"
    >
      <div className="w-[400px] rounded-lg p-4 bg-white flex flex-col gap-4">
        <p className="text-center font-bold">Welcome to Intranet Five !</p>
        <div>
          <p>email</p>
          <input className={inputStyle} ref={emailRef} type="email" />
        </div>
        <div>
          <p>password</p>
          <input className={inputStyle} ref={passwordRef} type="password" />
        </div>
        <div className="flex justify-between">
          <button onClick={signInHandler}>로그인</button>
          <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </div>
  );
}
