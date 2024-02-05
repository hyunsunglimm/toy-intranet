import { useContext} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NoticeCard from "./NoticeCard";
import { DataContext } from "../context/DataContext";

export default function NoticeGallery() {
  const { notices } = useContext(DataContext);
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }

  return (
    <div className="bg-blue-100 p-4 rounded-md">
      <p className="mb-4 text-center uppercase text-blue-400 font-bold text-[20px]">
        notice gallery
      </p>
      {/* slick 라이브러리 로직 */}
      <div className="slider-container">
      <Slider {...settings}>
        {notices.map((notice) => (
          <div key={notice.id}>
          <NoticeCard notice={notice} />
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}
