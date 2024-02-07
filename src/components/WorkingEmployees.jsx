import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import EmployeeCard from "./EmployeeCard";
import SkeletonEmployeeCard from "./skeleton/SkeletonEmployeeCard";
import { EMPLOYEE_SKELETON_ARRAY } from "../data/skeleton";

export default function WorkingEmployees() {
  const { employees } = useContext(DataContext);

  const isLoading = employees.length === 0;

  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const itemsPerPage = windowWidth > 1024 ? 8 : 6; // 한 페이지에 보여질 항목 수

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const workingEmployees = employees.filter(
    (employee) => employee.isWorking === true
  );

  // 페이지 변경 이벤트 핸들러
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // 현재 페이지에 표시할 항목 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = workingEmployees.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  if (isLoading) {
    return (
      <div className="p-4 rounded-md bg-white/10 h-[592px] md:h-[826px]">
        <p className="mb-4 text-center uppercase text-slate-300 font-bold text-[20px]">
          working now !
        </p>
        <ul className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {EMPLOYEE_SKELETON_ARRAY.map((i) => (
            <SkeletonEmployeeCard key={i} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-md bg-white/10 h-[592px] md:h-[826px] relative">
      <p className="mb-4 text-center uppercase text-slate-300 font-bold text-[20px]">
        working now !
      </p>
      <ul className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {currentItems.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </ul>

      {/* 페이지네이션 UI */}
      <div className="flex justify-center mt-4 absolute bottom-4 left-1/2 translate-x-[-50%]">
        {Array.from(
          { length: Math.ceil(workingEmployees.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
