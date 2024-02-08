import { createContext } from "react";
import { useEffect, useState } from "react";
import client, { urlFor } from "../sanity/client";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext(null);

export default function DataContextProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [notices, setNotices] = useState([]);
  const [loginUser, setLoginUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const loginUser = employees.find(
          (employee) => employee.email === user.email
        );
        setLoginUser(loginUser);
      } else {
        navigate("/login");
        setLoginUser(null);
      }
    });

    return () => unsubscribe();
  }, [employees, navigate]);

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
        setEmployees((prevEmployees) => {
          const updatedEmployees = prevEmployees.filter(
            (employee) => employee.id !== update.documentId
          );
          return updatedEmployees;
        });
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

  const dataValue = { employees, notices, loginUser };

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
}
