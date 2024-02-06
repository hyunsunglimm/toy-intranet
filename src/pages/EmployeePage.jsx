import { useContext, useRef } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getAuth } from "firebase/auth";
import { deleteEmployee } from "../sanity/employee";
import { introduction } from "../data/Introduction";
import { deleteButtonStyle } from "../style/button";
import Modal from "../components/Modal";
import Timer from "../components/Timer";
import { FaPencil } from "react-icons/fa6";

export default function EmployeePage() {
  const { employees, loginUser } = useContext(DataContext);
  const params = useParams();
  const navigater = useNavigate();
  const employee = employees.find((employee) => employee.id === params.id);
  const auth = getAuth();
  const user = auth.currentUser;
  const modalRef = useRef();

  const handleOpenModal = () => {
    modalRef.current.open(); // 모달 열기
  };

  // const contentHeight = `${window.innerHeight - 500}px`;

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
    <div className="p-8 flex items-center justify-center">
      <div
        // style={{ height: contentHeight }}
        className="w-[650px] h-[800px] ring-1 ring-slate-400/30 text-white rounded-lg backdrop-blur-md backdrop-sepia-0 bg-white/10 relative mt-[15%]"
      >
        <div className="flex flex-col items-center w-[600px] gap-8 text-center font-bold text-[24px] uppercase">
          <img
            className="h-[200px] w-[200px] bg-white ring-2 ring-slate-400/30 rounded-full top-0 left-[50%] transform -translate-x-1/2 -translate-y-1/2 absolute object-cover"
            src={employee.image}
            alt={`${employee.name}님의 프로필`}
          />
          <button className="absolute right-0 p-8 text-[28px]">
            <FaPencil />
          </button>

          <div className="w-full absolute top-[120px] left-[50%]  transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <p>{employee.name}</p>
              <p className="text-[18px]">{employee.age}</p>
              <div className="rounded-lg backdrop-blur-md backdrop-sepia-0 bg-white/10 p-8 m-8">
                <p className="font-semibold text-[24px] uppercase mb-8">
                  {employee.department}
                </p>
                <p className="text-[22px]">{employeeIntroduction()}</p>
              </div>
            </div>
            <div className="w-full font-semibold flex text-[20px] justify-center reletive">
              <div className="w-1/2 border-r-[1px] border-slate-300 p-8">
                <p>
                  Working hours :<br />
                  {employee.workingHours}
                </p>
              </div>
              <div className="w-1/2 border-l-[1px] border-slate-300 p-8">
                <p className="lowercase"> {employee.email}</p>
              </div>
            </div>
          </div>
          {employee?.id === loginUser?.id && (
            <button onClick={handleOpenModal} className={deleteButtonStyle}>
              회원 탈퇴
            </button>
          )}
          <Modal ref={modalRef}>
            <div className="flex flex-col items-center gap-4">
              <p className="text-[20px] font-bold uppercase">
                {loginUser?.department}
              </p>
              <img
                src={loginUser?.image}
                alt={`${loginUser?.name}의 프로필사진`}
                className="w-[200px] h-[200px] object-cover rounded-lg"
              />
              <Timer />
              <p>회원 탈퇴 하시겠습니까?</p>
              {employee?.id === loginUser?.id && (
                <button
                  onClick={deleteHandler}
                  className={`${deleteButtonStyle} sticky border-red-600 text-red-600`}
                >
                  회원 탈퇴
                </button>
              )}
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
