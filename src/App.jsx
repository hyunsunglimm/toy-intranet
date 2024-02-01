import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import client, { urlFor } from "./sanity/client";
import { DataContext } from "./context/DataContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NoticePage from "./pages/NoticePage";

function App() {
  const [employees, setEmployees] = useState([]);
  const [notices, setNotices] = useState([]);
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const loginUser = employees.find(
          (employee) => employee.email === user.email
        );
        setLoginUser(loginUser);
      } else {
        setLoginUser(null);
      }
    });

    return () => unsubscribe();
  }, [employees]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "employee"]{
            ...,
            "id": _id,
            "image": image.asset->url
        }`
        );
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchData();

    const query = `*[_type == "employee"]`;
    const subscription = client.listen(query).subscribe((update) => {
      if (update.transition === "disappear") {
        console.log(update.transition);
        // 삭제 로직 작성
        return;
      }

      const updatedEmployee = update.result;
      const transformedEmployee = {
        ...updatedEmployee,
        id: updatedEmployee._id,
        image: urlFor(updatedEmployee.image).url(),
      };

      if (update.transition === "appear") {
        setEmployees((prevEmployees) => {
          return [...prevEmployees, transformedEmployee];
        });
      }

      if (update.transition === "update") {
        setEmployees((prevEmployees) => {
          const existingEmployeeIndex = prevEmployees.findIndex(
            (employee) => employee.id === transformedEmployee.id
          );
          prevEmployees.splice(existingEmployeeIndex, 1, transformedEmployee);
          return [...prevEmployees];
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "notice"]{
        ...,
        "id": _id,
        "thumbnail": thumbnail.asset->url,
        "createdAt": _createdAt,
        "updatedAt": _updatedAt,
      }`
      )
      .then((data) => setNotices(data))
      .catch(console.error);
  }, []);

  return (
    <DataContext.Provider value={{ employees, loginUser, notices }}>
      <Header />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/notice/:id" element={<NoticePage />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
}

export default App;
