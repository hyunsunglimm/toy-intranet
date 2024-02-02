import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { MdOutlineMail } from "react-icons/md";
import { Bs0Circle } from "react-icons/bs";
import { useParams } from "react-router-dom";

export default function EmployeePage() {
  const { employees } = useContext(DataContext);
  const params = useParams();
  const employee = employees.find((employee) => employee.id === params.id);

  return (
    <section className="flex w-full bg-[#DBE9FE]">
      <div className="w-1/2 p-12 flex flex-col items-center">
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
        <div className="py-12 w-[85%] h-2/3 border-b-2 border-[#7E7E95] relative">
          <p className="text-3xl text-[#7E7E95] mb-5">Work status :</p>
          <p className="text-2xl text-[#7E7E95] flex items-center gap-[50px]">
            <Bs0Circle />
            {employee?.isWorking ? "부재 중" : "근무 중"}
          </p>

          <p className="text-2xl text-[#aaaabb] absolute right-0 bottom-0 p-4 flex items-center gap-1 ">
            <MdOutlineMail />
            {employee?.email}
          </p>
        </div>
      </div>
    </section>
  );
}
