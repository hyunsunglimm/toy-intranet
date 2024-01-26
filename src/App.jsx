import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import client from "./client";
import { EmployeeContext } from "./context/EmployeeContext";

function App() {
  const [employees, setEmployees] = useState([]);

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
    <EmployeeContext.Provider value={{ employees }}>
      <Header />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </EmployeeContext.Provider>
  );
}

export default App;
