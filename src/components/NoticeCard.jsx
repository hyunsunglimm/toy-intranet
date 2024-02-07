import { Link } from "react-router-dom";

export default function NoticeCard({ notice }) {
  const { title, thumbnail, id } = notice;

  return (
    <div className="rounded-md overflow-hidden group cursor-pointer mx-2 bg-white/10 border-[1px] border-slate-400/30 md:hover:bg-white/20">
      <Link to={`/notice/${id}`}>
        <div className="overflow-hidden">
          <img
            className="w-full h-[286px] object-cover md:group-hover:scale-125 transition"
            src={thumbnail}
            alt={`${title} thumbnail`}
          />
        </div>
        <p className="text-center p-4 text-slate-300">{title}</p>
      </Link>
    </div>
  );
}
