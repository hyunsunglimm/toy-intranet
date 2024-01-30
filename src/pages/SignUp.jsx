import { useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../sanity/employee";

export default function SignUp() {
  const [file, setFile] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const ageRef = useRef();
  const departmentRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();

  const navigate = useNavigate();

  function signInHandler() {
    const auth = getAuth();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const department = departmentRef.current.value;
    const startTime = startTimeRef.current.value;
    const endTime = endTimeRef.current.value;

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
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/login");
  }

  const handleChange = (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const labelStyle = "mb-2 text-gray-400";
  const inputStyle = "border-[1px] border-gray-200 w-full rounded-md py-1 px-2";

  return (
    <div className="p-8 w-full flex justify-center">
      <div className="bg-white rounded-lg w-[600px] p-8 h-min">
        <p className="text-center text-[20px] font-bold mb-4">직원 등록</p>
        <div className="flex flex-col gap-4">
          <div>
            <p className={labelStyle}>Image</p>
            <input
              className="hidden"
              id="input-userImg"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
            <label
              htmlFor="input-userImg"
              className="block w-[100px] h-[100px] border-[1px] rounded-full cursor-pointer mx-auto hover:bg-gray-50"
            >
              {!file && <div></div>}
              {file && (
                <img
                  className="w-[100px] h-[100px] rounded-full object-cover"
                  src={URL.createObjectURL(file)}
                  alt="local file"
                />
              )}
            </label>
          </div>
          <div>
            <p className={labelStyle}>Email</p>
            <input className={inputStyle} ref={emailRef} type="email" />
          </div>
          <div>
            <p className={labelStyle}>Password</p>
            <input className={inputStyle} ref={passwordRef} type="password" />
          </div>
          <div>
            <p className={labelStyle}>Name</p>
            <input className={inputStyle} ref={nameRef} />
          </div>
          <div>
            <p className={labelStyle}>Age</p>
            <input className={inputStyle} ref={ageRef} type="number" />
          </div>
          <div>
            <p className={labelStyle}>Department</p>
            <select ref={departmentRef} className={`${inputStyle} h-[34px]`}>
              <option>developer</option>
              <option>designer</option>
              <option>planner</option>
            </select>
          </div>
          <div>
            <p className={labelStyle}>WorkingHours</p>
            <div className="flex justify-between">
              <div>
                <label className="mr-4">시작 시간</label>
                <input ref={startTimeRef} type="time" />
              </div>
              <div>
                <label className="mr-4">종료 시간</label>
                <input ref={endTimeRef} type="time" />
              </div>
            </div>
          </div>
          <button
            className="w-full text-center bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition"
            onClick={signInHandler}
          >
            직원 등록
          </button>
        </div>
      </div>
    </div>
  );
}
