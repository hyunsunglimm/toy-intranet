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
    <section className="py-8">
      <div className="flex">
        <div className="basis-1/2 flex flex-col items-center gap-8">
          <img
            className="h-[600px] object-cover rounded-[20px]"
            src={employee.image}
            alt={`${employee.name}님의 프로필`}
          />
          <p className="text-center font-bold text-[24px] uppercase">
            {employee.department}
          </p>
        </div>
        <div className="basis-1/2 p-12 uppercase flex flex-col gap-8 text-[20px] justify-center">
          <p>name: {employee.name}</p>
          <p>email: {employee.email}</p>
          <p>age: {employee.age}</p>
          <p>working hours: {employee.workingHours}</p>
          <button
            onClick={deleteHandler}
            className="bg-red-300 text-white p-2 hover:bg-red-400 transition rounded-lg"
          >
            delete
          </button>
        </div>
      </div>
    </section>
  );
}
