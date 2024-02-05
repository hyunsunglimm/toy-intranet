import { Link } from "react-router-dom";

export default function EmployeeCard({ employee }) {
  const {
    name,
    email,
    age,
    department,
    image,
    isWorking,
    workingHours,
    reasonForAbsence,
    id,
  } = employee;

  const isReason = isWorking || reasonForAbsence;

  return (
    <li className="flex flex-col p-4 rounded-md bg-white overflow-hidden relative">
      <img
        className="w-[100px] h-[100px] rounded-full object-cover mx-auto mt-4"
        src={image}
        alt=""
      />
      <div className="w-full mx-auto mt-4 text-center">
        <p className="text-[20px] font-bold">{name}</p>
        <p className="text-gray-400">{email}</p>
        <p className="text-gray-400">{age}</p>
        <p className="text-green-400">{department}</p>
        <p className="text-gray-400 text-sm mt-2">{workingHours}</p>
        {!isReason ? (
          <p className="w-full text-center mt-2 text-sm text-red-400 absolute top-0 left-1/2 translate-x-[-50%]">
            부재 사유를 기입해주세요 !
          </p>
        ) : (
          <p className="absolute top-3 right-3 text-sm text-gray-400 font-bold">
            {reasonForAbsence}
          </p>
        )}
        <Link to={`/employee/${id}`}>
          <button className="bg-blue-400 text-white w-full p-1 rounded-lg hover:bg-blue-500 transition mt-4">
            VIEW PROFILE
          </button>
        </Link>
      </div>
    </li>
  );
}
