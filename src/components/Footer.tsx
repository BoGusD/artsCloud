import { Bg } from "../styles/FooterStyle";
import imgSrcMap from "@/data/imgSourceMap";
import Image from "next/image";
const Footer = () => {
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
        <section className="footerContent">
          {imgSrcMap.map((ele: any) => (
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
