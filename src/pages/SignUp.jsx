import { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function signInHandler() {
    const auth = getAuth();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(auth, email, password)
      // .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }

  const contentHeight = `${window.innerHeight - 80}px`;

  return (
    <div
      style={{ height: contentHeight }}
      className="flex w-full justify-center items-center"
    >
      <div className="border-2 p-4 bg-white flex flex-col gap-4">
        <div>
          <p>email</p>
          <input className="border-2" ref={emailRef} type="email" />
        </div>
        <div>
          <p>password</p>
          <input className="border-2" ref={passwordRef} type="password" />
        </div>
        <div className="flex justify-center">
          <button onClick={signInHandler}>회원가입</button>
        </div>
      </div>
    </div>
  );
}
