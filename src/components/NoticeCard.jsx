import { Link } from "react-router-dom";

export default function NoticeCard({ notice }) {
  const { title, thumbnail, id } = notice;

  return (
    <div className="bg-white rounded-md overflow-hidden group cursor-pointer">
      <Link to={`/notice/${id}`}>
        <div className="overflow-hidden">
          <img
            className="w-full h-[230px] object-cover group-hover:scale-125 transition"
            src={thumbnail}
            alt={`${title} thumbnail`}
          />
        </div>
        <p className="text-center p-4">{title}</p>
      </Link>
    </div>
  );
}
