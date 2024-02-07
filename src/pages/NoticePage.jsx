import { useContext } from "react";
import { useParams } from "react-router";
import { DataContext } from "../context/DataContext";
import SkeletonNoticePage from "../components/skeleton/\bSkeletonNoticePage";

export default function NoticePage() {
  const { id } = useParams();
  const { notices } = useContext(DataContext);
  const notice = notices.find((notice) => notice.id === id);

  if (!notice) {
    return <SkeletonNoticePage />;
  }
  const { title, description, thumbnail, createdAt, updatedAt } = notice;

  function dateFormatter(date) {
    const utcDate = new Date(date);

    const koreaDateTimeFormat = new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Asia/Seoul",
    });

    return koreaDateTimeFormat.format(utcDate);
  }

  return (
    <div className="py-8">
      <div className="bg-white/10 rounded-lg overflow-hidden">
        <img
          className="w-full h-[500px] object-cover"
          src={thumbnail}
          alt={`${title} thumbnail`}
        />
        <div className="p-8 text-gray-400 relative">
          <p className="text-[20px] text-center font-bold mb-8">{title}</p>
          <p className="whitespace-pre leading-[2]">{description}</p>
          <div className="text-sm text-gray-300 absolute bottom-4 right-4">
            <p>작성일 : {dateFormatter(createdAt)}</p>
            <p>수정일 : {dateFormatter(updatedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
