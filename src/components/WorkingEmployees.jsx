import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import EmployeeCard from "./EmployeeCard";
import SkeletonEmployeeCard from "./skeleton/SkeletonEmployeeCard";
import { EMPLOYEE_SKELETON_ARRAY } from "../data/skeleton";

export default function WorkingEmployees() {
  const { employees } = useContext(DataContext);

  const isLoading = employees.length === 0;

  const workingEmployees = employees.filter(
    (employee) => employee.isWorking === true
  );

  if (isLoading) {
    return (
      <div className="p-4 rounded-md backdrop-blur-md backdrop-sepia-0 bg-white/10">
        <p className="mb-4 text-center uppercase text-white font-bold text-[20px]">
          working now !
        </p>
        <ul className="grid grid-cols-4 gap-4">
          {EMPLOYEE_SKELETON_ARRAY.map((i) => (
            <SkeletonEmployeeCard key={i} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-md backdrop-blur-md backdrop-sepia-0 bg-white/10">
      <p className="mb-4 text-center uppercase text-white font-bold text-[20px]">
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
