import { useState } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentLanguageState } from "@/module/recoil";
import { iconSrcMap, iconSrcMapType } from "@/data/iconSourceMap";
import { Bg, ModalContents, IconBox } from "../styles/ModalStyle";

const Modal = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const currentLanguage = useRecoilValue(currentLanguageState);

  const handleMouseEnter = (icon: any) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const getIconSrc = (icon: any) => {
    return hoveredIcon === icon ? icon.hover : icon.origin;
  };

  return (
    <>
      <Bg>
        <ModalContents>
          <div className="contents">
            <div className="topMenu">
              <div className="item">
                <div className="profileImage">
                  <img src="pupleicon.png" className="profileImg" />
                </div>

                {currentLanguage === "EN" ? (
                  <>
                    <span>Sign in </span>
                    <div className="barIcon"></div>
                    <span>Sign up</span>
                  </>
                ) : (
                  <>
                    <span>로그인</span>
                    <div className="barIcon"></div>
                    <span>회원가입</span>
                  </>
                )}
              </div>
            </div>
            <div className="menu-item">DIVE IN</div>
            <div className="menu-item">
              <a href="https://artscloud.net/artplanet">ART PLANET</a>
            </div>
            <div className="menu-item">
              <a href="https://artscloud.net/artspace">ART SPACE</a>
            </div>
            <div className="underMenu">
              <a href="https://about.artscloud.net/">ABOUT</a>
              <div>
                <a href="/help">HELP</a>
              </div>
              <div>GUIDE</div>
            </div>
            <IconBox>
              {iconSrcMap.map((icon: iconSrcMapType) => (
                <div key={icon.origin} className="imgIcon">
                  <a href={icon.link}>
                    <Image
                      onMouseEnter={() => handleMouseEnter(icon)}
                      onMouseLeave={() => handleMouseLeave()}
                      src={getIconSrc(icon)}
                      alt={icon.alt}
                      width="50"
                      height="50"
                    />
                  </a>
                </div>
              ))}
            </IconBox>
          </div>
        </ModalContents>
      </Bg>
    </>
  );
};

export default Modal;
