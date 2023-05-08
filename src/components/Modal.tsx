import { useState } from "react";
import iconSrcMap from "@/data/iconSourceMap";
import { Bg, ModalContents, IconBox } from "../styles/ModalStyle";
import Image from "next/image";

const Modal = () => {
  const [svg, setSvg] = useState();
  const [menu, setMenu] = useState(false);

  const onMouseEnter = (event: any) => {
    for (let i = 0; i < iconSrcMap.length; i++) {
      if (iconSrcMap[i].origin === event.target.src) {
        event.target.src = iconSrcMap[i].hover;
        return;
      }
    }
  };

  const onMouseLeave = (event: any) => {
    for (let i = 0; i < iconSrcMap.length; i++) {
      if (iconSrcMap[i].hover === event.target.src) {
        event.target.src = iconSrcMap[i].origin;
        return;
      }
    }
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
                <span>Sign in </span>
                <div className="barIcon"></div>
                <span>Sign up</span>
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
              {iconSrcMap.map((ele: any) => (
                <div key={ele.origin} className="imgIcon">
                  <Image
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    src={ele.origin}
                    alt={ele.alt}
                    width="50"
                    height="50"
                  />
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
