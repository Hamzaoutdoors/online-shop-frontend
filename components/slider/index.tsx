import Slider from "react-slick";
import SlideCard from "./SecondSliderCard";
import { secondSlider } from "../../mock/secondSlider";

const SecondSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "linear",
    appendDots: (dots: string) => (
      <div className="bg-transparent !pb-[40px]">
        <ul> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="container mx-auto my-6 w-full">
      <Slider {...settings}>
        {secondSlider.map((item) => {
          return (
            <SlideCard key={item.id} title={item.title} desc={item.desc} />
          );
        })}
      </Slider>
    </div>
  );
};

export default SecondSlider;
