import { Bg } from "../styles/FooterStyle";
import { iconSrcMap, iconSrcMapType } from "@/data/iconSourceMap";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentLanguageState } from "@/module/recoil";

const Footer = () => {
  const currentLanguage = useRecoilValue(currentLanguageState);
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
        <section className="footerContent">
          {iconSrcMap.map((ele: iconSrcMapType) => (
            <div key={ele.origin} className="imgIcon">
              <a href={ele.link}>
                <Image
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  src={ele.origin}
                  alt={ele.alt}
                  width="50"
                  height="50"
                />
              </a>
            </div>
          ))}
        </section>
        <section className="footerLogo">
          <img src="logoUnity.png" className="footerIcon" />
        </section>

        {currentLanguage === "KR" && (
          <section className="footerExplain">
            사이트의 모든 저작권은 아츠클라우드에게 있습니다.
            <br /> 사이트의 이미지 및 영상, 문자 등의 자료 또는 정보(웹사이트
            화면 포함)에 대한 무단복제, 전송, 배포, 크롤링/스크래핑 등의 행위는
            <br />
            저작권법, 부정경쟁방지 및 영업비밀보호에 관한 법률 등 관련 법령에
            의하여 엄격히 금지됩니다.
          </section>
        )}
        {currentLanguage === "EN" && (
          <section className="footerExplain">
            Copyright © ARTSCLOUD All rights reserved.
          </section>
        )}
      </Bg>
    </>
  );
};

export default Footer;
