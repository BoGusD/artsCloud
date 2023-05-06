import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  setMenu: any;
}
// setState 하는 부분은 BPT에서 갖다가 복붙하십쇼
const Header = (props: Props) => {
  const [language, setLanguage] = useState("EN");

  // const toggleMenu = () => {
  //   setMenu((prev: boolean) => !prev);
  // };

  return (
    <>
      <div>ARTSCLOUD</div>
      {!language && <div>guide</div> && <div>가이드</div>}
      <div>create</div>
      <button
        onClick={() => {
          if (language == "EN") setLanguage("KR");
          else setLanguage("EN");
        }}
      >
        언어
      </button>
      <button
        onClick={() => {
          props.setMenu((prev: boolean) => !prev);
        }}
      >
        ddd
      </button>
      {/* {menu && <Model/>&&<} */}
    </>
  );
};

export default Header;
