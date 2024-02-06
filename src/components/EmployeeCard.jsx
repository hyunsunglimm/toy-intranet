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
    <li className="rounded-md h-[342px] bg-slate-800 relative hover:ring-1 ring-slate-400/30 transition">
      <Link
        to={`/employee/${id}`}
        className="flex flex-col h-full justify-center"
      >
        <img
          className="w-[100px] h-[100px] rounded-full object-cover mx-auto bg-slate-300"
          src={image}
          alt=""
        />
        <div className="w-full mx-auto mt-4 text-center text-slate-400 flex flex-col gap-2">
          <p className="font-bold text-lg">{name}</p>
          <p>{email}</p>
          <p>{age}</p>
          <p className="text-indigo-500">{department}</p>
          <p>{workingHours}</p>
          {!isReason ? (
            <div className="w-4 h-4 rounded-full bg-red-500/80 shadow-lg shadow-red-500 absolute top-[-4px] right-[-4px]"></div>
          ) : (
            <p className="absolute top-3 right-3 text-sm text-gray-400 font-bold">
              {reasonForAbsence}
            </p>
          )}
        </div>
      </Link>
    </li>
  );
}
