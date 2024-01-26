import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export default function MyPage() {
  const { employees } = useContext(EmployeeContext);

  return (
    <section className="p-8">
      <p className="mb-8">MyPage(임시 데이터 확인용)</p>
      <ul className="grid grid-cols-4 gap-4">
        {employees.map((employee) => (
          <li
            key={employee.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-[300px] object-cover"
              src={employee.image}
              alt={`${employee.name} photo`}
            />
            <div className="py-4 px-8">
              <p>이름: {employee.name}</p>
              <p>부서: {employee.department}</p>
              <p>근무여부: {employee.isWorking ? "O" : "X"}</p>
              <p>근무시간: {employee.workingHours}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
