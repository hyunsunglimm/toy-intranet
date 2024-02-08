import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import DataContextProvider from "./context/DataContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NoticePage from "./pages/NoticePage";
import EmployeePage from "./pages/EmployeePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <DataContextProvider>
      <Header />
      <div className="w-11/12 max-w-[1200px] mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/notice/:id" element={<NoticePage />} />
          <Route path="/employee/:id" element={<EmployeePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </DataContextProvider>
  );
}

export default App;
