import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import EmployeeCard from "./EmployeeCard";

export default function AbsenceEmployees() {
  const [reason, setReason] = useState("전체");
  const { employees } = useContext(EmployeeContext);
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

  return (
    <div className="bg-blue-100 p-4 rounded-md">
      <p className="mb-4">
        부재중인 직원 중 부재 항목에 따른 카테고리 메뉴로 데이터 필터링 기능
        구현
      </p>
      <div className="flex justify-end mb-3">
        <select className="px-2 py-1 rounded-md" onChange={handleChange}>
          <option>전체</option>
          <option>연차</option>
          <option>반차</option>
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
