import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getAuth } from "firebase/auth";
import { deleteEmployee } from "../sanity/employee";
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
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(/employeebg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="text-white w-[80%] py-8 backdrop-blur-md backdrop-sepia-0 bg-white/10 relative">
        <div className="flex flex-col items-center gap-8 text-center font-bold text-[24px] uppercase">
          <img
            className="mb-[100px] h-[200px] w-[200px] bg-white border-[3px] border-solid border-white  rounded-full top-0 left-[50%] transform -translate-x-1/2 -translate-y-1/2 absolute"
            src={employee.image}
            alt={`${employee.name}님의 프로필`}
          />
          <div className="mt-[90px] flex flex-col gap-3 items-center">
            <p>{employee.name}</p>
            <p>age: {employee.age}</p>
            <p className="text-center font-semibold text-[24px] uppercase">
              {employee.department}
            </p>
            <p className="mt-16 w-2/3">
              "동적이고 사용자 친화적인 웹 애플리케이션을 만드는 프론트엔드
              개발자로, 웹 기술에 열정을 가지고 있습니다."
            </p>
          </div>

          <div className="p-12 font-semibold uppercase flex gap-8 text-[20px] justify-center">
            <p className="boder-l">working hours: {employee.workingHours}</p>
            <p className="font-semibold">{employee.email}</p>
          </div>
          <button
            onClick={deleteHandler}
            className="bg-red-300 text-white p-2 hover:bg-red-400 transition rounded-lg"
          >
            delete
          </button>
        </div>
      </section>
    </div>
  );
}
