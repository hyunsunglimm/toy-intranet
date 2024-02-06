import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import EmployeeCard from "./EmployeeCard";
import { EMPLOYEE_SKELETON_ARRAY } from "../data/skeleton";
import SkeletonEmployeeCard from "./skeleton/SkeletonEmployeeCard";

export default function AbsenceEmployees() {
  const [reason, setReason] = useState("전체");
  const { employees } = useContext(DataContext);

  if (!employees) {
    return <div>Loading...</div>;
  }

  const absenceEmployees = employees.filter(
    (employee) => employee.isWorking === false
  );

  function getFilteredEmployees() {
    switch (reason) {
      case "전체":
        return absenceEmployees;

      case "미기입":
        return absenceEmployees.filter(
          (employees) => !employees.reasonForAbsence
        );

      default:
        return absenceEmployees.filter(
          (employees) => employees.reasonForAbsence === reason
        );
    }
  }

  const filteredEmployees = getFilteredEmployees();

  function handleChange(e) {
    setReason(e.target.value);
  }

  const isLoading = employees.length === 0;

  if (isLoading) {
    return (
      <div className="p-4 rounded-md bg-white/10">
        <p className="mb-4 text-center uppercase text-slate-300 font-bold text-[20px]">
          not working now !
        </p>
        <div className="flex justify-end mb-3">
          <select
            className="p-2 rounded-md bg-slate-800 text-slate-300"
            onChange={handleChange}
          >
            <option>전체</option>
            <option>연차</option>
            <option>반차</option>
            <option>비근무시간</option>
            <option>미기입</option>
          </select>
        </div>
        <ul className="grid grid-cols-4 gap-4">
          {EMPLOYEE_SKELETON_ARRAY.map((i) => (
            <SkeletonEmployeeCard key={i} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-md bg-white/10">
      <p className="mb-4 text-center uppercase text-slate-300 font-bold text-[20px]">
        not working now !
      </p>
      <div className="flex justify-end mb-3">
        <select
          className="p-2 rounded-md bg-white/10 border-[1px] border-slate-400/30 hover:bg-white/20 cursor-pointer text-slate-300"
          onChange={handleChange}
        >
          <option>전체</option>
          <option>연차</option>
          <option>반차</option>
          <option>비근무시간</option>
          <option>미기입</option>
        </select>
      </div>
      <ul className="grid grid-cols-4 gap-4">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </ul>
    </div>
  );
}
