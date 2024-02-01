import { useEffect, useState } from "react";
import client from "../sanity/client";
import NoticeCard from "./NoticeCard";

export default function NoticeGallery() {
  const [notices, setNotices] = useState([]);
  console.log(notices[0]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "notice"]{
        ...,
        "id": _id,
        "thumbnail": thumbnail.asset->url,
        "createdAt": _createdAt,
        "updatedAt": _updatedAt,
      }`
      )
      .then((data) => setNotices(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-blue-100 p-4 rounded-md">
      <p className="mb-4">기업 공지 모음 갤러리</p>
      <ul className="grid grid-cols-4 gap-4">
        {notices.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </ul>
    </div>
  );
}
