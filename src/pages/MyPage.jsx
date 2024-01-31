import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export default function MyPage() {
  const { loginUser } = useContext(EmployeeContext);

  return (
    <section className="p-8">
      <p>MyPage</p>
      <div className="text-center bg-white">
        <img className="w-72 h-80" src={loginUser?.image} alt="user" />
        <p className="text-2xl">{loginUser?.name}</p>
        <p>{loginUser?.age}</p>
        <p>{loginUser?.department}</p>
        <p>{loginUser?.email}</p>
        <p>{loginUser?.isworking ? "부재중" : "근무중"}</p>
      </div>
    </section>
  );
}
