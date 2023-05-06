import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Bg } from "../styles/HeaderStyle";

interface Props {
  setMenu: any;
}
// setState 하는 부분은 BPT에서 갖다가 복붙하십쇼
const Header = (props: Props) => {
  const [language, setLanguage] = useState("EN");

  // const toggleMenu = () => {
  //   setMenu((prev: boolean) => !prev);
  // };
  const sortingMenu = (event: any) => {
    console.log(event.target.value);
    if (event.target.value == "EN") {
      setLanguage("KR");
    } else {
      setLanguage("EN");
    }
  };

  return (
    <>
      <Bg>
        <img src="logo.gif" className="imgLogo" />
        <div className="headerMenu">
          {language === "KR" ? (
            <div className="guideMenu">GUIDE</div>
          ) : language === "EN" ? (
            <div className="guideMenu">가이드</div>
          ) : null}
          {language == "KR" ? (
            <div className="button">CREATE</div>
          ) : language == "EN" ? (
            <div className="button">만들기</div>
          ) : null}
        </div>

        <div>
          <img src="languageLogo.svg" className="languageLogo" />
          <select name="sort" onChange={sortingMenu}>
            <option value="EN">EN</option>
            <option value="KR">KR</option>
          </select>
        </div>
        <button
          onClick={() => {
            props.setMenu((prev: boolean) => !prev);
            console.log(props.setMenu.property);
          }}
        >
          {props.setMenu && <img src="menu1.png" /> && <img src="menu2.png" />}
        </button>
      </Bg>
    </>
  );
};

export default Header;
