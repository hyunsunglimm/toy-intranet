import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export default function MyPage() {
  const { loginUser } = useContext(EmployeeContext);
  const [isWorking, setIsWorking] = useState(loginUser?.isWorking || false);

  const toggleStatus = () => {
    setIsWorking(!isWorking);
  };

  return (
    <section className="flex w-[100%] bg-[#728395]">
      <div className="p-8 w-[60%] bg-[#728395] bg-blend-multiply"
        style={{
          backgroundImage: `url(${loginUser?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "local",
          backgroundRepeat: "no-repeat"
        }}>
        <p>MyPage</p>
      </div>
      <div className="text-center bg-white right-0 w-[50%] p-10 m-14">
        <img className="w-72 h-80 mx-auto rounded-full" src={loginUser?.image} alt="user" />
        <p className="text-2xl">{loginUser?.name}</p>
        <p>{loginUser?.age}</p>
        <p>{loginUser?.department}</p>
        <p>{loginUser?.email}</p>
        <button className="bg-[#728395]" onClick={toggleStatus}>
          {isWorking ? "부재중" : "근무중"}
        </button>
      </div>
    </section>
  );
}
