import { useContext, useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { DataContext } from "../context/DataContext";
import { buttonStyle } from "../style/button";

export default function Login() {
  const { employees } = useContext(DataContext);

  const [errorMessage, setErrorMessage] = useState({
    emailMessage: "",
    passwordMessage: "",
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  function signInHandler(e) {
    e.preventDefault();

    const auth = getAuth();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!employees.some((employee) => employee.email === email)) {
      setErrorMessage((prev) => {
        return { ...prev, emailMessage: "존재하는 직원 이메일이 아닙니다." };
      });
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage({
          emailMessage: "",
          passwordMessage: "비밀번호가 틀립니다.",
        });
        console.log(error);
      });
  }

  return (
    <div
      style={{ height: "calc(100vh - 80px)" }}
      className="flex justify-center items-center"
    >
      <form
        className="w-[400px] rounded-lg p-4 bg-white/10 flex flex-col gap-4"
        onSubmit={signInHandler}
      >
        <p className="text-center font-bold text-lg text-slate-300">
          Welcome to Intranet Five !
        </p>
        <Input
          type="email"
          label="Email"
          ref={emailRef}
          message={errorMessage.emailMessage}
        />
        <Input
          type="password"
          label="Password"
          ref={passwordRef}
          message={errorMessage.passwordMessage}
        />
        <Link
          className="text-center text-sm text-slate-300 md:hover:underline"
          to="/signup"
        >
          아직 직원등록을 안하셨나요 ?
        </Link>
        <button type="submit" className={`${buttonStyle} w-full`}>
          LOGIN
        </button>
      </form>
    </div>
  );
}
