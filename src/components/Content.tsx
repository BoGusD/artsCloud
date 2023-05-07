import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
const Hexagon = styled.div`
  width: 300px;
  height: 300px;
  background-color: #6c6;
  position: relative;
  margin: 55px auto;
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
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  .InnerBox {
    width: 33vw;
  }
`;
const Content = () => {
  return (
    <>
      <div>
        <h2>ARTS Space</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 7,
            },
          }}
        >
          <SwiperSlide>
            <Hexagon>Hexagon1</Hexagon>
          </SwiperSlide>
          <SwiperSlide>
            <Hexagon>Hexagon2</Hexagon>
          </SwiperSlide>
          <SwiperSlide>
            <Hexagon>Hexagon3</Hexagon>
          </SwiperSlide>
        </Swiper>
        <select name="sort" id="sortingBox">
          <option value="Newest">Newest</option>
          <option value="Popular">Popular</option>
          <option value="Most Liked">Most Liked</option>
        </select>
        <button>검색</button>

        <FlexBox>
          <Hexagon>Hexagon1</Hexagon>
          <Hexagon>Hexagon2</Hexagon>
          <Hexagon>Hexagon3</Hexagon>
        </FlexBox>
      </div>
    </>
  );
};

export default Content;
