import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaGem } from "react-icons/fa";
import { useParams } from "react-router-dom";

const userinfocss = {
  text: "text-xl flex items-center justify-center",
};

export default function EmployeePage() {
  const { employees } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const employee = employees.find(employee => employee.id === params.id);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <section className="flex w-full bg-[#728395] relative">
      <div
        className="p-8 w-[50%] bg-[#728395] bg-blend-multiply bg-right-top"
        style={{
          backgroundImage: `url(${employee?.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p>MyPage</p>
      </div>
      {isLoading ? (
        <div className="text-center bg-white absolute right-[20%] top-0 w-[30%] h-[90%] p-10 m-14">
          <div className="animate-pulse w-72 h-80 mx-auto rounded-full bg-gray-400"></div>
          <p className="animate-pulse text-3xl w-36 h-8 bg-gray-400 rounded-full mx-auto my-4"></p>
          <div className={`${userinfocss.text} my-2 animate-pulse`}>
            <div className="w-20 h-8 bg-gray-400 rounded-full"></div>
          </div>
          <div className={`${userinfocss.text} my-2 animate-pulse`}>
            <div className="w-28 h-8 bg-gray-400 rounded-full"></div>
          </div>
          <div className={`${userinfocss.text} my-2 animate-pulse`}>
            <div className="w-24 h-8 bg-gray-400 rounded-full"></div>
          </div>
          <div className={`${userinfocss.text} my-2 animate-pulse`}>
            <span className="text-xl w-16 h-6 bg-gray-400 rounded-full mx-auto"></span>
          </div>
        </div>
      ) : (
        <div className="text-center bg-white absolute right-[20%] top-0 w-[30%] h-[90%] p-10 m-14">
          <img
            className="w-72 mx-auto object-cover"
            src={employee?.image}
            alt="user"
          />
          <p className="text-3xl">{employee?.name}</p>
          <p className={`${userinfocss.text} my-2`}>
            <FaGem />
            {employee?.age}
          </p>
          <p className={`${userinfocss.text} my-2`}>
            <MdOutlineWorkOutline />
            {employee?.department}
          </p>
          <p className={`${userinfocss.text} my-2`}>
            <MdOutlineMail />
            {employee?.email}
          </p>
          <div className={`${userinfocss.text} my-2`}>
            <span className="text-xl">
              {employee.isWorking ? "부재중" : "근무중"}
            </span>
          </div>
        </div>
      )}
    </section>
  )}

