import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaGem } from "react-icons/fa";

export default function MyPage() {
  const { loginUser } = useContext(EmployeeContext);
  const [isWorking, setIsWorking] = useState(loginUser?.isWorking || false);
  const [absenceReason, setAbsenceReason] = useState(""); // 부재 사유 추가

  const toggleStatus = () => {
    setIsWorking(!isWorking);
  };

  const handleAbsenceReasonChange = (e) => {
    setAbsenceReason(e.target.value);
  };

  const statusStyle = {
    backgroundColor: isWorking ? "#FF0000" : "#00FF00",
    color: "#FFFFFF",
  };

  return (
    <section className="flex w-[100%] bg-[#728395]">
      <div
        className="p-8 w-[60%] bg-[#728395] bg-blend-multiply"
        style={{
          backgroundImage: `url(${loginUser?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "local",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p>MyPage</p>
      </div>
      <div className="text-center bg-white right-0 w-[50%] p-10 m-14">
        <img
          className="w-72 h-80 mx-auto rounded-full"
          src={loginUser?.image}
          alt="user"
        />
        <p className="text-3xl">{loginUser?.name}</p>
        <p className="text-xl flex items-center justify-center gap-2">
          <FaGem />
          {loginUser?.age}
        </p>
        <p className="text-xl flex items-center justify-center gap-2">
          <MdOutlineWorkOutline />
          {loginUser?.department}
        </p>
        <p className="text-xl flex items-center justify-center gap-2">
          <MdOutlineMail />
          {loginUser?.email}
        </p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xl">
            {isWorking ? "부재중" : "근무중"}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isWorking}
              onChange={toggleStatus}
            />
            <span className="slider round"></span>
          </label>
        </div>
        {isWorking && (
          <div>
            <textarea
              className="mt-4 p-2 border border-gray-400 rounded"
              placeholder="부재 사유를 입력하세요"
              value={absenceReason}
              onChange={handleAbsenceReasonChange}
            />
          </div>
        )}
      </div>
    </section>
  );
}

