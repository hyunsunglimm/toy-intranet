import { useContext } from "react";
import NoticeCard from "./NoticeCard";
import { DataContext } from "../context/DataContext";

export default function NoticeGallery() {
  const { notices } = useContext(DataContext);

  return (
    <div className="bg-blue-100 p-4 rounded-md">
      <p className="mb-4 text-center uppercase text-blue-400 font-bold text-[20px]">
        notice gallery
      </p>
      <ul className="grid grid-cols-4 gap-4">
        {notices.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </ul>
    </div>
  );
}
