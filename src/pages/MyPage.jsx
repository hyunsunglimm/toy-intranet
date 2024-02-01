import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { MdOutlineMail } from "react-icons/md";

export default function MyPage() {
  const { loginUser } = useContext(EmployeeContext);
  const [isWorking, setIsWorking] = useState(loginUser?.isWorking || false);

  const toggleStatus = () => {
    setIsWorking(!isWorking);
  };

  const statusStyle = {
    backgroundColor: isWorking ? "#FF0000" : "#00FF00", // 연두색 또는 빨간색 배경색을 선택
    color: "#FFFFFF", // 텍스트 색상을 흰색으로 설정
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
        <p className="text-2xl">{loginUser?.name}</p>
        <p className="text-xl">{loginUser?.age}</p>
        <p className="text-xl">{loginUser?.department}</p>
        <p className="text-xl flex items-center justify-center"><MdOutlineMail />{loginUser?.email}</p>
        <button
          className="bg-[#728395 m-10 text-xl"
          style={statusStyle} // 이 스타일을 버튼에 적용
          onClick={toggleStatus}
        >
          {isWorking ? "부재중" : "근무중"}
        </button>
      </div>
    </section>
  );
}
