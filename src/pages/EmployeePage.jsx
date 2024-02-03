import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { MdOutlineMail } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function EmployeePage() {
  const { employees } = useContext(DataContext);
  const params = useParams();
  const employee = employees.find((employee) => employee.id === params.id);
  console.log(employee?.reasonForAbsence);

  /* 토글 버튼의 클래스 */
  const toggleButtonClass = employee?.isWorking
    ? "bg-green-500 text-white"
    : "bg-red-500 text-white";

  return (
    <section className="flex w-full bg-[#DBE9FE]">
      <div className="w-1/2 p-[80px] flex flex-col items-center">
        <div className="p-8 bg-[#F7F7FB] w-[70%] h-[80%] flex justify-center rounded-lg">
          <div
            className="p-3 w-[100%] h-[100%] bg-[#CED3DD] rounded-lg"
            style={{
              backgroundImage: `url(${employee?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="h-[20%] bg-[#DBE9FE] text-center w-[80%] flex flex-col justify-center">
          <p className="text-5xl p-2 text-[#7E7E95]">{employee?.name}</p>
          <p className="text-2xl p-2 text-[#aaaabb]">{employee?.department}</p>
        </div>
      </div>

      <div className="w-1/2 bg-[#DBE9FE]">
        <div className="py-[80px] w-[85%] h-2/3 border-b-2 border-[#7E7E95] relative">
          <p className="text-4xl text-[#7E7E95] mb-5">Work status :</p>
          <div className="flex items-center">
            <button className={`p-2 rounded ${toggleButtonClass}`}>
              {employee?.isWorking ? "근무 중" : "부재 중"}
            </button>
            {!employee?.isWorking && (
              <p className="text-2xl text-[#7E7E95]">
                ({employee?.reasonForAbsence || "부재 사유를 입력해주세요!"})
              </p>
            )}
          </div>

          <p className="text-2xl text-[#aaaabb] absolute right-0 bottom-0 p-4 flex items-center gap-1 ">
            <MdOutlineMail />
            {employee?.email}
          </p>
        </div>
      </div>
    </section>
  );
}
