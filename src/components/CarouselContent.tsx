import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { SwiperHexagon } from "@/styles/ContentStyle";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import { counseolImg } from "@/data/imgSourceMap";
import { imgSrcMapType } from "@/data/imgSourceMap";

const CarouselContent = () => {
  const swiperRef = useRef<any>(null);

  const [swiperIndex, setSwiperIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState("");

  const handleSlideChange = () => {
    const curIdx: number = swiperRef.current.swiper.activeIndex;
    setSwiperIndex(curIdx);
    let currentSlide = swiperRef.current.swiper.slides[curIdx + 1];
    const currentSlideImg = currentSlide.querySelector("img");
    setCurrentContent(currentSlideImg.alt);
  };

  // 마운트 이전에 실행
  useLayoutEffect(() => {
    handleSlideChange();
  }, []);
  return (
    <>
      <div className="carousel">
        <div className="carouselContent">
          <div className="test">
            <div className="swiperDetail">
              <div className="swiperList">
                <Swiper
                  ref={swiperRef}
                  onSlideChange={handleSlideChange}
                  loop
                  spaceBetween={50}
                  slidesPerView={3}
                  className="swiperTrack"
                  scrollbar={{ draggable: true }}
                  navigation={false}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    1100: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {counseolImg.map((ele: imgSrcMapType) => (
                    <SwiperSlide key={ele.name}>
                      <div className="swiperHexagon">
                        <SwiperHexagon>
                          <img
                            src={ele.name}
                            alt={ele.alt}
                            className="hexagonImg"
                          />
                        </SwiperHexagon>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="swiperTitle">
              <img src="left-arrow.svg" />
              <div>{currentContent}</div>
              <img src="right-arrow.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselContent;
