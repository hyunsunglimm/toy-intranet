import { useContext, useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../sanity/employee";
import Input from "../components/Input";
import ImageUpload from "../components/ImageUpload";
import { DataContext } from "../context/DataContext";
import { buttonStyle } from "../style/button";
import TimePicker from "../components/TimePicker";

export default function SignUp() {
  const { employees } = useContext(DataContext);
  const [file, setFile] = useState();
  const [workingHours, setWorkingHours] = useState({});
  const [errorMessage, setErrorMessage] = useState({
    imageMessage: "",
    emailMessage: "",
    passwordMessage: "",
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const ageRef = useRef();
  const departmentRef = useRef();

  const navigate = useNavigate();

  function signInHandler(e) {
    e.preventDefault();

    const auth = getAuth();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const department = departmentRef.current.value;
    const startTime = workingHours.start;
    const endTime = workingHours.end;

    if (!file) {
      setErrorMessage((prev) => {
        return { ...prev, imageMessage: "사진을 추가해주세요." };
      });
      return;
    }

    if (employees.some((employee) => email === employee.email)) {
      setErrorMessage((prev) => {
        return { ...prev, emailMessage: "이미 존재하는 이메일입니다." };
      });
      return;
    }

    if (password.length < 6) {
      setErrorMessage((prev) => {
        return {
          ...prev,
          passwordMessage: "비밀번호는 6자리 이상이어야 합니다.",
        };
      });
      return;
    }

    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

    if (specialCharacters.test(password)) {
      setErrorMessage((prev) => {
        return {
          ...prev,
          passwordMessage: "비밀번호에 특수문자를 포함할 수 없습니다.",
        };
      });
      return;
    }

    const userData = {
      name,
      email,
      age: +age,
      department,
      file,
      workingHours: `${startTime}-${endTime}`,
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        addEmployee(userData);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.code);
        console.log(error.message);
      });
  }

  const handleChange = (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
      setErrorMessage((prev) => {
        return { ...prev, imageMessage: "" };
      });
    }
  };

  const timeChangeHandler = (type, e) => {
    setWorkingHours((prev) => {
      return { ...prev, [type]: e.target.value };
    });
  };

  const contentHeight = `${window.innerHeight - 80}px`;

  return (
    <div
      style={{ height: contentHeight }}
      className="flex justify-center items-center"
    >
      <div className="bg-white/10 rounded-lg w-full sm:w-[600px] p-8 h-min">
        <p className="text-center text-[20px] font-bold mb-4 text-slate-300">
          직원 등록
        </p>
        <form className="flex flex-col gap-4" onSubmit={signInHandler}>
          <ImageUpload
            message={errorMessage.imageMessage}
            handleChange={handleChange}
            file={file}
          />
          <Input
            message={errorMessage.emailMessage}
            label="Email"
            type="email"
            ref={emailRef}
          />
          <Input
            message={errorMessage.passwordMessage}
            label="Password"
            type="password"
            ref={passwordRef}
          />
          <Input label="Name" ref={nameRef} />
          <Input label="Age" type="number" ref={ageRef} />
          <div>
            <p className="mb-2 text-slate-300">Department</p>
            <select
              ref={departmentRef}
              className="border-[1px] border-slate-400/30 text-slate-300 bg-white/0 outline-none w-full rounded-md py-1 px-2 h-[34px] cursor-pointer"
              required
            >
              <option>developer</option>
              <option>designer</option>
              <option>planner</option>
            </select>
          </div>
          <div>
            <p className="mb-2 text-slate-300">WorkingHours</p>
            <div className="flex justify-between gap-2 sm:gap-0">
              <TimePicker
                label="Start"
                timeChangeHandler={timeChangeHandler}
                pickTime={workingHours?.start}
              />
              <TimePicker
                label="End"
                timeChangeHandler={timeChangeHandler}
                pickTime={workingHours?.end}
              />
            </div>
          </div>
          <button type="submit" className={`${buttonStyle} w-full mt-[-20px]`}>
            직원 등록
          </button>
        </form>
      </div>
    </div>
  );
}
