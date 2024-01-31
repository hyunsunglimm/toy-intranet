import { useContext, useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../sanity/employee";
import Input from "../components/Input";
import ImageUpload from "../components/ImageUpload";
import { EmployeeContext } from "../context/EmployeeContext";

export default function SignUp() {
  const { employees } = useContext(EmployeeContext);
  const [file, setFile] = useState();
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
  const startTimeRef = useRef();
  const endTimeRef = useRef();

  const navigate = useNavigate();

  function signInHandler(e) {
    e.preventDefault();

    const auth = getAuth();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const department = departmentRef.current.value;
    const startTime = startTimeRef.current.value;
    const endTime = endTimeRef.current.value;

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

  return (
    <>
      <div className="p-8 w-full flex justify-center">
        <div className="bg-white rounded-lg w-[600px] p-8 h-min">
          <p className="text-center text-[20px] font-bold mb-4">직원 등록</p>
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
              <p className="mb-2 text-gray-400">Department</p>
              <select
                ref={departmentRef}
                className="border-2 focus:border-blue-300 outline-none w-full rounded-md py-1 px-2 h-[36px]"
                required
              >
                <option>developer</option>
                <option>designer</option>
                <option>planner</option>
              </select>
            </div>
            <div>
              <p className="mb-2 text-gray-400">WorkingHours</p>
              <div className="flex justify-between">
                <div>
                  <label className="mr-4">시작 시간</label>
                  <input ref={startTimeRef} type="time" required />
                </div>
                <div>
                  <label className="mr-4">종료 시간</label>
                  <input ref={endTimeRef} type="time" required />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-center bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition"
            >
              직원 등록
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
