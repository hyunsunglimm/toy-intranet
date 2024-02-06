import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NoticeCard from "./NoticeCard";
import { DataContext } from "../context/DataContext";
import SkeletonNoticeCard from "./skeleton/SkeletonNoticeCard";
import { NOTICE_SKELETON_ARRAY } from "../data/skeleton";

export default function NoticeGallery() {
  const { notices } = useContext(DataContext);

  const isLoading = notices.length === 0;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  if (isLoading) {
    return (
      <div className="bg-blue-100 p-4 rounded-md">
        <p className="mb-4 text-center uppercase text-blue-400 font-bold text-[20px]">
          notice gallery
        </p>
        <div className="grid grid-cols-4 gap-4">
          {NOTICE_SKELETON_ARRAY.map((i) => (
            <SkeletonNoticeCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-100 p-4 rounded-md">
      <p className="mb-4 text-center uppercase text-blue-400 font-bold text-[20px]">
        notice gallery
      </p>
      {/* slick 라이브러리 로직 */}
      <Slider {...settings} className="mx-[-8px]">
        {notices.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </Slider>
    </div>
  );
}
