import { useContext, useRef, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getAuth } from "firebase/auth";
import {
  deleteEmployee,
  updateEmployee,
  updateEmployeeImage,
} from "../sanity/employee";
import { introduction } from "../data/Introduction";
import { deleteButtonStyle } from "../style/button";
import Modal from "../components/Modal";
import { FadeLoader } from "react-spinners";
import SkeletonEmployeePage from "../components/skeleton/SkeletonEmployeePage";

export default function EmployeePage() {
  const { employees, loginUser } = useContext(DataContext);

  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const navigater = useNavigate();
  const employee = employees.find((employee) => employee.id === params.id);
  const auth = getAuth();
  const user = auth.currentUser;
  const modalRef = useRef();

  const isCurrentEmployee = loginUser?.id === params.id;

  if (!employee) {
    return <SkeletonEmployeePage />;
  }

  const handleOpenModal = () => {
    modalRef.current.open(); // 모달 열기
  };

  const contentHeight = `${window.innerHeight - 80}px`;

  if (!employee) {
    return <p>loading...</p>;
  }

  function employeeIntroduction() {
    if (employee.department === "developer") {
      return introduction.developer;
    } else if (employee.department === "designer") {
      return introduction.designer;
    } else if (employee.department === "planner") {
      return introduction.planner;
    }
  }

  function handleChange(e) {
    updateEmployee(employee.id, "reasonForAbsence", e.target.value);
  }

  const handleImageChange = (e) => {
    e.preventDefault();

    if (!e.target.files) return;
    const selectedFile = e.target.files[0];
    updateEmployeeImage(loginUser.id, selectedFile, setIsLoading);
  };

  function deleteHandler() {
    deleteUser(user)
      .then(() => {
        deleteEmployee(loginUser.id);
        navigater("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div
        className="flex items-center justify-center text-slate-300"
        style={{ height: contentHeight }}
      >
        <div className="w-[600px] bg-white/10 rounded-md border-[1px] border-slate-400/30 p-8 relative">
          {isCurrentEmployee && (
            <input
              className="hidden"
              name="input"
              id="userImage-update"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          )}
          <label htmlFor="userImage-update">
            <img
              className={`h-[100px] w-[100px] md:h-[140px] md:w-[140px] bg-white ring-2 ring-slate-400/30 rounded-full object-cover absolute top-[-50px] md:top-[-70px] left-1/2 translate-x-[-50%] ${
                isCurrentEmployee && "cursor-pointer"
              }`}
              src={employee.image}
              alt={`${employee.name}님의 프로필`}
            />
          </label>
          <div
            className={`absolute top-8 right-8 ${
              employee.isWorking ? "text-green-500" : "text-red-500"
            }`}
          >
            {employee.isWorking ? "근무중" : "부재중"}
          </div>
          <div className="mt-[50px]">
            <div className="text-center">
              <p className="uppercase font-bold text-lg">{employee.name}</p>
              <p>{employee.age}</p>
            </div>
            <div className="bg-white/10 rounded-md border-[1px] border-slate-400/30 p-4 mt-2 md:mt-8 text-center">
              <p className="uppercase mb-2 md:mb-4">{employee.department}</p>
              <p className="text-[12px] md:text-[16px]">
                {employeeIntroduction()}
              </p>
            </div>
            {!employee.isWorking && (
              <select
                defaultValue={employee.reasonForAbsence}
                onChange={handleChange}
                className="p-2 w-full text-center rounded-md bg-white/10 border-[1px] border-slate-400/30 mt-2 md:mt-8 cursor-pointer md:hover:bg-white/20"
                disabled={!isCurrentEmployee}
              >
                <option className="hidden">부재사유가 없습니다.</option>
                <option>비근무시간</option>
                <option>연차</option>
                <option>반차</option>
              </select>
            )}
            <div className="flex flex-col md:gap-4 sm:flex-row text-center items-center mt-2 md:mt-8">
              <div className="w-full uppercase text-[14px] md:text-[16px]">
                working hours : {employee.workingHours}
              </div>
              <div className="hidden sm:block w-[1px] h-12 border-[1px] border-slate-400/30"></div>
              <p className="w-full">{employee.email}</p>
            </div>
            <div className="flex justify-end mt-2 md:mt-8">
              {isCurrentEmployee && (
                <button className={deleteButtonStyle} onClick={handleOpenModal}>
                  직원 탈퇴
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal ref={modalRef}>
        <div className="flex flex-col items-center gap-4">
          <p className="text-[20px] font-bold uppercase">{loginUser?.name}</p>
          <img
            src={loginUser?.image}
            alt={`${loginUser?.name}의 프로필사진`}
            className="w-[200px] h-[200px] object-cover rounded-lg"
          />
          <p className="text-red-400">정말 삭제하시겠습니까 ?</p>
          <div className="w-full bg-white/30 border-[1px] border-slate-400/30 flex rounded-md">
            <button
              className="w-full p-2 border-r-[1px] border-slate-400/30 md:hover:bg-white/20 rounded-l-md"
              onClick={deleteHandler}
            >
              YES
            </button>
            <button
              className="w-full p-2 md:hover:bg-white/20 rounded-r-md"
              onClick={() => modalRef.current.close()}
            >
              NO
            </button>
          </div>
        </div>
      </Modal>
      {isLoading && (
        <div className="fixed inset-0 w-full h-full z-30 bg-stone-900/70 flex justify-center items-center">
          <FadeLoader color="white" />
        </div>
      )}
    </>
  );
}
