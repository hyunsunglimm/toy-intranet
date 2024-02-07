import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NoticeCard from "./NoticeCard";
import { DataContext } from "../context/DataContext";
import SkeletonNoticeCard from "./skeleton/SkeletonNoticeCard";
import { NOTICE_SKELETON_ARRAY } from "../data/skeleton";
import NextArrow from "../style/NextArrow";
import PrevArrow from "../style/PrevArrow";

export default function NoticeGallery() {
  const { notices } = useContext(DataContext);

  const isLoading = notices.length === 0;

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return (
      <div className="p-4 rounded-md bg-white/10">
        <p className="mb-4 text-center uppercase text-white font-bold text-[20px]">
          notice gallery
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
