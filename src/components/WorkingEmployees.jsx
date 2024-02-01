import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import EmployeeCard from "./EmployeeCard";

export default function WorkingEmployees() {
  const { employees } = useContext(DataContext);

  if (!employees) {
    return <div>Loading...</div>;
  }

  const workingEmployees = employees.filter(
    (employee) => employee.isWorking === true
  );

  return (
    <div className="bg-blue-100 p-4 rounded-md">
      <p className="mb-4 text-center uppercase text-blue-400 font-bold text-[20px]">
        working now !
      </p>
      <ul className="grid grid-cols-4 gap-4">
        {workingEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </ul>
    </div>
  );
}
