import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export default function MyPage() {
  const { loginUser } = useContext(EmployeeContext);


  return (
  
    <section className="flex w-[100%] bg-[#728395]">
      <div className="p-8 w-[60%] bg-[#728395] bg-blend-multiply"
      style={{backgroundImage: `url(${loginUser?.image})`, // 이미지 파일의 경로
      backgroundSize: "cover", // 이미지를 컨테이너에 맞게 조절
      backgroundPosition: "center",
      backgroundAttachment: "local",
      backgroundRepeat: "no-repeat"}}>
        <p>MyPage</p>
      </div>
      <div className="text-center bg-white right-0 w-[50%] p-10 m-14">
        <img className="w-72 h-80 mx-auto rounded-full" src={loginUser?.image} alt="user" />
        <p className="text-2xl">{loginUser?.name}</p>
        <p>{loginUser?.age}</p>
        <p>{loginUser?.department}</p>
        <p>{loginUser?.email}</p>
        <p>{loginUser?.isworking ? "부재중" : "근무중"}</p>
      </div>
    </section>
  );
}
