import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NoticeCard from "./NoticeCard";
import { DataContext } from "../context/DataContext";
import SkeletonNoticeCard from "./skeleton/SkeletonNoticeCard";
import { NOTICE_SKELETON_ARRAY } from "../data/skeleton";

<div class="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5" style="mask-image: linear-gradient(transparent, black);"></div>
export default function NoticeGallery() {
  const { notices } = useContext(DataContext);

  const isLoading = notices.length === 0;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  if (!isLoading) {
    return (
      <div className="p-4 rounded-md bg-white/10">
        <p className="mb-4 text-center uppercase text-white font-bold text-[20px]">
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
    <div className="p-4 rounded-md bg-white/10">
      <p className="mb-4 text-center uppercase text-slate-300 font-bold text-[20px]">
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
