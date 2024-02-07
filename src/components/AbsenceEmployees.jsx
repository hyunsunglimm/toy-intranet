import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import EmployeeCard from "./EmployeeCard";
import { EMPLOYEE_SKELETON_ARRAY } from "../data/skeleton";
import SkeletonEmployeeCard from "./skeleton/SkeletonEmployeeCard";

export default function AbsenceEmployees() {
  const { employees } = useContext(DataContext);

  const [reason, setReason] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const absenceEmployees = employees.filter(
    (employee) => employee.isWorking === false
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getFilteredEmployees() {
    switch (reason) {
      case "전체":
        return absenceEmployees;
      case "미기입":
        return absenceEmployees.filter(
          (employee) => !employee.reasonForAbsence
        );
      default:
        return absenceEmployees.filter(
          (employee) => employee.reasonForAbsence === reason
        );
    }
  }

  // 페이지당 표시할 항목 수
  const itemsPerPage = windowWidth > 1024 ? 8 : 6;

  // 전체 필터된 직원 목록
  const filteredEmployees = getFilteredEmployees();

  // 현재 페이지의 데이터 추출
  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  // 페이지 변경 핸들러
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleChange(e) {
    setReason(e.target.value);
    setCurrentPage(1); // 필터 변경 시 페이지를 첫 페이지로 리셋
  }

  const isLoading = employees.length === 0;

  if (isLoading) {
    return (
      <div className="p-4 rounded-md bg-white/10 h-[642px] md:h-[876px]">
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
        <ul className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {EMPLOYEE_SKELETON_ARRAY.map((i) => (
            <SkeletonEmployeeCard key={i} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-md bg-white/10 h-[642px] md:h-[876px] relative">
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
      <ul className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {currentEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </ul>
      {/* 페이지네이션 컴포넌트 */}
      <div className="flex justify-center mt-4 absolute bottom-4 left-1/2 translate-x-[-50%]">
        {Array.from({
          length: Math.ceil(filteredEmployees.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
