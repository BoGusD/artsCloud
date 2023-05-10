import { useState, useEffect } from "react";
import { Bg, Contents } from "../styles/HeaderStyle";
import Modal from "./Modal";

// GLOBAL STATE
import { useRecoilState } from "recoil";
import { currentLanguageState } from "@/module/recoil";

const Header = () => {
  const [currentLanguage, setCurrentLanguage] =
    useRecoilState(currentLanguageState);
  const [modal, setModal] = useState(false);

  const sortingLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value == "EN") {
      setCurrentLanguage("EN");
    } else {
      setCurrentLanguage("KR");
    }
  };
  const toggleModal = () => {
    setModal((prev) => !prev);
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
            {currentLanguage === "EN" ? (
              <div className="guideMenu">
                <a href="https://artscloud.net/guide">GUIDE</a>
              </div>
            ) : currentLanguage === "KR" ? (
              <div className="guideMenu">
                <a href="https://artscloud.net/ko/guide">가이드</a>
              </div>
            ) : null}
            {currentLanguage == "EN" ? (
              <button className="button">
                <a href="https://api.auth.artscloud.net/?redirect_to=https://artscloud.net/signup">
                  CREATE
                </a>
              </button>
            ) : currentLanguage == "KR" ? (
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

            {modal && (
              <div onClick={toggleModal} className="HeaderButton">
                <img src="menu1.png" />
              </div>
            )}
            {!modal && (
              <div onClick={toggleModal} className="HeaderButton">
                <img src="menu2.png" />
              </div>
            )}
          </article>
        </Contents>
        {modal && <Modal />}
      </Bg>
    </>
  );
};

export default Header;
