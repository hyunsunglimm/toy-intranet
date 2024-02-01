import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import EmployeeCard from "./EmployeeCard";

export default function WorkingEmployees() {
  const { employees } = useContext(EmployeeContext);
  const workingEmployees = employees.filter(
    (employee) => employee.isWorking === true
  );

  return (
    <div className="bg-blue-100 p-4 rounded-md">
      <p className="mb-4">현재 근무중인 직원</p>
      <ul className="grid grid-cols-4 gap-4">
        {workingEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </ul>
    </div>
  );
}
