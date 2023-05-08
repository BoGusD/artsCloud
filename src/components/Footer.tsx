import { Bg } from "../styles/FooterStyle";
import iconSrcMap from "@/data/iconSourceMap";
import Image from "next/image";
const Footer = () => {
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
        </section>
        <section className="footerLogo">
          <img src="logoUnity.png" />
        </section>
      </Bg>
    </>
  );
};

export default Footer;
