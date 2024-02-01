export default function NoticeCard({ notice }) {
  const { title, thumbnail } = notice;

  return (
    <li className="bg-white rounded-md overflow-hidden group cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="w-full h-[230px] object-cover group-hover:scale-125 transition"
          src={thumbnail}
          alt={`${title} thumbnail`}
        />
      </div>
      <p className="text-center p-4">{title}</p>
    </li>
  );
}
