import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import client from "./sanity/client";
import { EmployeeContext } from "./context/EmployeeContext";
import Management from "./pages/Management";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { getAuth } from "firebase/auth";

function App() {
  const [employees, setEmployees] = useState([]);

  const auth = getAuth();
  const user = auth.currentUser;
  const loginUser = employees?.find(
    (employee) => employee.email === user?.email
  );

  useEffect(() => {
    client
      .fetch(
        `*[_type == "employee"]{
        ...,
        "id": _id,
        "image": image.asset->url
      }`
      )
      .then((data) => setEmployees(data))
      .catch(console.error);
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, loginUser }}>
      <Header />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/management" element={<Management />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </EmployeeContext.Provider>
  );
}

export default App;
