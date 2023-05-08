import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Bg, ArtContent, FlexBox } from "@/styles/ContentStyle";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import imgSrcMap from "@/data/imgSourceMap";
import styled from "styled-components";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentLanguageState } from "@/module/recoil";

const testArr = [1, 2, 3, 4, 5];
const Hexagon = styled.div`
  width: ${(props: any) => props.viewportWidth} / 5;
  height: ${(props: any) => props.viewportWidth} / 5;
  background-color: #6c6;
  position: relative;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border: 3px solid purple;
  @media (min-width: 1100px) {
    width: ${(props: any) => props.viewportWidth} / 5;
    height: ${(props: any) => props.viewportWidth} / 5;
  }
  .hexagonImg {
    object-fit: fill;
    width: 100%;
    height: 100%;

    @media (min-width: 1100px) {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
`;
const SwiperHexagon = styled.div`
  width: 300px;
  height: 281px;
  background-color: #6c6;
  position: relative;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border: 3px solid purple;
  @media (min-width: 1100px) {
    width: 500px;
    height: 469px;
  }
`;

const Content = () => {
  const currentLanguage = useRecoilValue(currentLanguageState);
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setViewportWidth(window.innerWidth);
    });
    return window.removeEventListener("resize", function () {
      setViewportWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <Bg>
        <ArtContent>
          <div className="artLogo">ARTS SPACE</div>
          <div className="carousel">
            <div className="carouselContent">
              <div className="test">
                <div className="swiperDetail">
                  <div className="swiperList">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={3}
                      className="swiperTrack"
                      scrollbar={{ draggable: true }}
                      navigation
                      pagination={{ clickable: true }}
                      breakpoints={{
                        1100: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      <SwiperSlide>
                        {imgSrcMap.map((ele: any) => (
                          <div key={ele.name}>
                            <SwiperHexagon>
                              <img
                                src={ele.name}
                                alt={ele.art}
                                className="hexagonImg"
                              />
                            </SwiperHexagon>
                          </div>
                        ))}
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div>arrow</div>
              </div>
            </div>
          </div>
          <div className="observerContents">
            <div className="searchContents">
              <div className="searchMenu">
                {currentLanguage === "EN" && (
                  <>
                    <div className="menuTitle">Newest</div>
                    <div className="menuTitle">Popular</div>
                    <div className="menuTitle">Most Liked</div>
                  </>
                )}
                {currentLanguage === "KR" && (
                  <>
                    <div className="menuTitle">최신순</div>
                    <div className="menuTitle">조회순</div>
                    <div className="menuTitle">좋아요순</div>
                  </>
                )}
              </div>
              <div className="search">
                <input placeholder="Serach" className="serachHolder" />
                <img src="serach.jpg" />
              </div>
            </div>
            <FlexBox>
              {imgSrcMap.map((ele: any) => (
                <div key={ele.name}>
                  <Hexagon viewportWidth={viewportWidth}>
                    <img src={ele.name} alt={ele.art} className="hexagonImg" />
                  </Hexagon>
                </div>
              ))}
            </FlexBox>
          </div>
        </ArtContent>
      </Bg>
    </>
  );
};

export default Content;
