import { useState, useEffect } from "react";
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
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[currentDateTime.getDay()]; // 현재 날짜의 요일을 가져옴
  const year = currentDateTime.getFullYear();
  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();
  // const seconds = currentDateTime.getSeconds();
  const ampm = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 || 12;
  const formattedDateTime = `${year}년 ${
    currentDateTime.getMonth() + 1
  }월 ${currentDateTime.getDate()}일 ${ampm} ${formattedHours}시 ${minutes}분`;

  return (
    <p onClick={openModal} {...props}>
      {formattedDateTime} ({dayOfWeek})
    </p>
  );
}
