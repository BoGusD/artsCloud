import { useState } from "react";
import imgSrcMap from "@/data/imgSourceMap";
import { Bg, IconBox, LeftBox, TopMenu } from "./ModalStyle";
import Image from "next/image";

const Modal = () => {
  const [svg, setSvg] = useState();

  const onMouseEnter = (event: any) => {
    for (let i = 0; i < imgSrcMap.length; i++) {
      if (imgSrcMap[i].origin === event.target.src) {
        event.target.src = imgSrcMap[i].hover;
        return;
      }
    }
  };

  const onMouseLeave = (event: any) => {
    for (let i = 0; i < imgSrcMap.length; i++) {
      if (imgSrcMap[i].hover === event.target.src) {
        event.target.src = imgSrcMap[i].origin;
        return;
      }
    }
  };

  return (
    <>
      <Bg>
        <div className="flexBox">
          <LeftBox>
            <TopMenu>
              <img src="pupleicon.png" className="imgIcon" />
              <span>SIGN IN |</span>
              <span>SIGN OUT</span>
            </TopMenu>
            <div>DIVE IN</div>
            <div>ART PLANET</div>
            <div>ART SPACE</div>
          </LeftBox>

          <IconBox>
            {imgSrcMap.map((ele: any) => (
              <div key={ele.origin}>
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
        <div className="over1100">
          <div>ABOUT</div>
          <div>HELP</div>
          <div>GUIDE</div>
        </div>

        <div className="under1100">
          <div className="innerBox">ABOUT</div>
          <div className="innerBox">HELP</div>
          <div className="innerBox">GUIDE</div>
        </div>
      </Bg>
    </>
  );
};

export default Modal;
