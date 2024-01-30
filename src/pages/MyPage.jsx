import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export default function MyPage() {
  const { loginUser } = useContext(EmployeeContext);

  return (
    <section className="p-8">
      <img src={loginUser?.image} alt="" />
    </section>
  );
}
