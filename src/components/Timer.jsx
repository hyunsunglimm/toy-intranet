import { useState, useEffect } from "react";
import { LuClock3 } from "react-icons/lu";

export default function Timer({ openModal, ...props }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // 1초마다 현재 날짜 및 시간을 업데이트
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // 컴포넌트가 언마운트될 때 clearInterval을 통해 interval 정리
    return () => clearInterval(intervalId);
  }, []); // 두 번째 매개변수에 빈 배열을 전달하여 최초 렌더링 시에만 useEffect가 실행되도록 함

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayOfWeek = daysOfWeek[currentDateTime.getDay()]; // 현재 날짜의 요일을 가져옴
  // const year = currentDateTime.getFullYear();
  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();
  // const seconds = currentDateTime.getSeconds();
  // const ampm = hours >= 12 ? "오후" : "오전";
  const formattedHours = String(hours % 12 || 12).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');    //padStart를 이용해서 두자리로 만들고 나머지 빈칸에 0을 집어넣게 해줌
  const formattedDateTime = `${hours}:${formattedMinutes}`;

  return (
    <p
      onClick={openModal}
      {...props}
      style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
    >
      <LuClock3 />
      {formattedDateTime} {dayOfWeek}
    </p>
  );
}
