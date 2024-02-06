import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getAuth } from "firebase/auth";
import { deleteEmployee } from "../sanity/employee";
import { introduction } from "../data/Introduction";
import { deleteButtonStyle } from "../style/button";
export default function EmployeePage() {
  const { employees, loginUser } = useContext(DataContext);
  const params = useParams();
  const navigater = useNavigate();
  const employee = employees.find((employee) => employee.id === params.id);
  const auth = getAuth();
  const user = auth.currentUser;

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
    <section className="flex items-center h-[900px] ring-1 ring-slate-400/30 text-white rounded-lg backdrop-blur-md backdrop-sepia-0 bg-white/10 relative mt-[15%] mb-[10%]">
      <div className="flex flex-col items-center gap-8 text-center font-bold text-[24px] uppercase">
        <img
          className="h-[10vw] w-[10vw] bg-white ring-2 ring-slate-400/30 rounded-full top-0 left-[50%] transform -translate-x-1/2 -translate-y-1/2 absolute object-cover"
          src={employee.image}
          alt={`${employee.name}님의 프로필`}
        />
        <div className="p-8 w-2/3 absolute top-[150px] left-[50%]  transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <p>{employee.name}</p>
            <p>age : {employee.age}</p>
            <p className="font-semibold text-[24px] uppercase">
              {employee.department}
            </p>
            <p className="mt-16">{employeeIntroduction()}</p>
          </div>
          <div className="p-12 w-full font-semibold flex text-[20px] justify-center">
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
          {employee?.id === loginUser?.id && (
            <button onClick={deleteHandler} className={deleteButtonStyle}>
              직원 탈퇴
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
