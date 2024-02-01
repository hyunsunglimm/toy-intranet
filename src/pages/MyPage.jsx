import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaGem } from "react-icons/fa";

const userinfocss = {
  text: "text-xl flex items-center justify-center",
};

export default function MyPage() {
  const { loginUser } = useContext(DataContext);
  const [isWorking, setIsWorking] = useState(loginUser?.isWorking || false);
  const [absenceReason, setAbsenceReason] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const toggleStatus = () => {
    setIsWorking(!isWorking);
  };

  const handleAbsenceReasonChange = (e) => {
    setAbsenceReason(e.target.value);
  };


  return (
    <section className="flex w-full bg-[#728395]">
      <div
        className="p-8 w-[60%] bg-[#728395] bg-blend-multiply"
        style={{
          backgroundImage: `url(${loginUser?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "local",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p>MyPage</p>
      </div>
      {isLoading ? (
        <div className="text-center bg-white right-0 w-[50%] p-10 m-14">
          <div className="animate-pulse w-72 h-80 mx-auto rounded-full bg-gray-400"></div>
          <p className="animate-pulse text-3xl w-36 h-8 bg-gray-400 rounded-full mx-auto my-4"></p>
          <div className={`${userinfocss.text} my-2 animate-pulse`}>
            <div className="w-20 h-8 bg-gray-400 rounded-full"></div>
          </div>
          <div className={`${userinfocss.text} my-2 animate-pulse`}>
            <div className="w-28 h-8 bg-gray-400 rounded-full"></div>
          </div>
          <div className={`${userinfocss.text} my-2 animate-pulse`}>
            <div className="w-24 h-8 bg-gray-400 rounded-full"></div>
          </div>
          <div className={`${userinfocss.text} my-2 animate-pulse`}>
            <span className="text-xl w-16 h-6 bg-gray-400 rounded-full mx-auto"></span>
          </div>
          {isWorking && (
            <div>
              <div className="animate-pulse w-96 h-32 mt-4 p-2 bg-gray-400 rounded"></div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center bg-white right-0 w-[50%] p-10 m-14">
          <img
            className="w-72 h-80 mx-auto rounded-full"
            src={loginUser?.image}
            alt="user"
          />
          <p className="text-3xl">{loginUser?.name}</p>
          <p className={`${userinfocss.text} my-2`}>
            <FaGem />
            {loginUser?.age}
          </p>
          <p className={`${userinfocss.text} my-2`}>
            <MdOutlineWorkOutline />
            {loginUser?.department}
          </p>
          <p className={`${userinfocss.text} my-2`}>
            <MdOutlineMail />
            {loginUser?.email}
          </p>
          <div className={`${userinfocss.text} my-2`}>
            <span className="text-xl">
              {isWorking ? "부재중" : "근무중"}
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isWorking}
                onChange={toggleStatus}
              />
              <span className="slider round"></span>
            </label>
          </div>
          {isWorking && (
            <div>
              <textarea
                className="mt-4 p-2 border border-gray-400 rounded"
                placeholder="부재 사유를 입력하세요"
                value={absenceReason}
                onChange={handleAbsenceReasonChange}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
