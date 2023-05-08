import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Bg, ArtContent } from "@/styles/ContentStyle";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
const Hexagon = styled.div`
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
  .hexagonImg {
    object-fit: cover;
    width: 300px;
    height: 281px;
    @media (min-width: 1100px) {
      width: 500px;
      height: 469px;
      object-fit: fill;
    }
  }
`;

const FlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 13px;
  padding-top: 50px;
  margin: 0px auto;
  max-width: 650px;
  min-height: 100vh;
  @media (min-width: 1100px) {
    max-width: 1920px;
    grid-template-columns: repeat(3, 26%);
    gap: 70px 11%;
    padding-bottom: 0px;
    min-height: 40vw;
  }
`;
const Content = () => {
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
                      spaceBetween={400}
                      slidesPerView={2}
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
                        <Hexagon>
                          <img src="./movie/1917.jpg" className="hexagonImg" />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img
                            src="./movie/검은사제들.jpg"
                            className="hexagonImg"
                          />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img
                            src="./movie/기생충.jpg"
                            className="hexagonImg"
                          />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img src="./movie/돈.jpg" className="hexagonImg" />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img
                            src="./movie/레이징파이어.jpg"
                            className="hexagonImg"
                          />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img
                            src="./movie/매트릭스.jpg"
                            className="hexagonImg"
                          />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img
                            src="./movie/백두산.jpg"
                            className="hexagonImg"
                          />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img
                            src="./movie/부산행.jpg"
                            className="hexagonImg"
                          />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img
                            src="./movie/스마일.jpg"
                            className="hexagonImg"
                          />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img
                            src="./movie/신세계.jpg"
                            className="hexagonImg"
                          />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img
                            src="./movie/어바웃타임.jpg"
                            className="hexagonImg"
                          />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img
                            src="./movie/터미네이터.jpg"
                            className="hexagonImg"
                          />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img
                            src="./movie/어벤져스.jpg"
                            className="hexagonImg"
                          />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img
                            src="./movie/엑시트.jpg"
                            className="hexagonImg"
                          />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img src="./movie/콜.jpg" className="hexagonImg" />
                        </Hexagon>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Hexagon>
                          <img src="./movie/타짜.jpg" className="hexagonImg" />
                        </Hexagon>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="observerContents">
            <div className="serachContents">
              <div className="searchMenu">
                <div className="menuTitle">Newest</div>
                <div className="menuTitle">Popular</div>
                <div className="menuTitle">Most Liked</div>
              </div>
              <div className="search">
                <input placeholder="Serach" className="serachHolder" />
                <img src="serach.jpg" />
              </div>
            </div>
            <FlexBox>
              <Hexagon>
                <img src="./movie/타짜.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/콜.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/엑시트.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/터미네이터.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/어벤져스.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/스즈메의 문단속.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/신세계.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/스마일.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/부산행.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/백두산.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/매트릭스.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/레이징파이어.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/돈.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/기생충.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/검은사제들.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/1917.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/파워.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/플레민.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/투모로우.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/베테랑.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/테넷.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/터널.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/전우치.jpg" className="hexagonImg" />
              </Hexagon>
              <Hexagon>
                <img src="./movie/연가시.jpg" className="hexagonImg" />
              </Hexagon>
            </FlexBox>
          </div>
        </ArtContent>
      </Bg>
    </>
  );
};

export default Content;
