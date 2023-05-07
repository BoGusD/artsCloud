import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Bg, Contents } from "../styles/HeaderStyle";
import Modal from "./Modal";

interface Props {
  setMenu: any;
}
// setState 하는 부분은 BPT에서 갖다가 복붙하십쇼
const Header = () => {
  const [language, setLanguage] = useState("KR");
  const [modal, setModal] = useState(false);

  const sortingLanguage = (event: any) => {
    console.log(event.target.value);
    if (event.target.value == "EN") {
      setLanguage("KR");
    } else {
      setLanguage("EN");
    }
  };
  const choiceModal = () => {
    if (!modal) {
      setModal(true);
    } else setModal(false);
  };
  useEffect(() => {
    console.log(modal);
  }, [modal]);

  return (
    <>
      <Bg>
        <Contents>
          <article className="logo">
            <span>
              <img src="logo.gif" className="imgLogo" alt="logo" />
            </span>
          </article>
          <article className="headerMenu">
            {language === "KR" ? (
              <div className="guideMenu">
                <a href="https://artscloud.net/guide">GUIDE</a>
              </div>
            ) : language === "EN" ? (
              <div className="guideMenu">
                <a href="https://artscloud.net/ko/guide">가이드</a>
              </div>
            ) : null}
            {language == "KR" ? (
              <button className="button">
                <a href="https://api.auth.artscloud.net/?redirect_to=https://artscloud.net/signup">
                  CREATE
                </a>
              </button>
            ) : language == "EN" ? (
              <button className="button">
                <a href="https://api.auth.artscloud.net/?redirect_to=https://artscloud.net/signup?lang=ko">
                  만들기
                </a>
              </button>
            ) : null}

            <div className="languageMenu">
              <span>
                <img src="languageLogo.svg" className="languageLogo" />
              </span>
              <select name="sort" onChange={sortingLanguage} className="sort">
                <option value="EN">EN</option>
                <option value="KR">KR</option>
              </select>
            </div>
            {/* button css 추후에 넣어야됨 */}
            <button onClick={choiceModal} className="">
              {modal && <div>X</div> && <div>=</div>}
            </button>
          </article>
        </Contents>
        {!modal && <Modal />}
      </Bg>
    </>
  );
};

export default Header;
