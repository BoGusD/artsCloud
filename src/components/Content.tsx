import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import {
  Bg,
  ArtContent,
  FlexBox,
  Hexagon,
  SwiperHexagon,
} from "@/styles/ContentStyle";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { imgSrcMap } from "@/data/imgSourceMap";
import { counseolImg } from "@/data/imgSourceMap";
import { useRecoilValue } from "recoil";
import { currentLanguageState } from "@/module/recoil";
import { imgSrcMapType } from "@/data/imgSourceMap";

const Content = () => {
  const currentLanguage = useRecoilValue(currentLanguageState);
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  const [isSearchOn, setIsSearchOn] = useState(false);
  // 검색창 보이기/숨기기 : isSearchOn
  const [imgSrc, setImgSrc] = useState<any>(imgSrcMap.slice());
  // 재료 배열 21 => 15 => 9 => 3 => 0
  const [imgSrcPart, setImgSrcPart] = useState<any>([]);
  // 실제 배열 0 => 6 => 12 => 18 => 21
  const [isAllImageLoaded, setIsAllImageLoaded] = useState<boolean>(false);
  // 이미지가 다 로딩되었는지 나타내는 boolean
  const swiperRef = useRef<any>(null);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState("");

  const handleSlideChange = () => {
    const curIdx: number = swiperRef.current.swiper.activeIndex;
    setSwiperIndex(curIdx);
    let currentSlide = swiperRef.current.swiper.slides[curIdx + 1];
    const currentSlideImg = currentSlide.querySelector("img");
    setCurrentContent(currentSlideImg.alt);
  };

  const [order, setOrder] = useState("default");
  // const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    // 1. 원본, 재료, 실제 배열 초기화
    // 2. 재료 배열 6개 추출 => 실제 배열
    if (order !== "default") {
      if (order === "Newest") {
        sortByDate();
      } else if (order === "Popular") {
        sortByPopularity();
      } else if (order === "Most Liked") {
        sortByPoint();
      }
      const newSrc = imgSrcMap.slice();
      const newItems = newSrc.splice(0, 6);
      setImgSrc([...newSrc]);
      setImgSrcPart(newItems);
    }
  }, [order]);

  const sortByPopularity = () => {
    imgSrcMap.sort(
      (a: imgSrcMapType, b: imgSrcMapType) => b.popular - a.popular
    );
  };

  const sortByDate = () => {
    imgSrcMap.sort(
      (a: imgSrcMapType, b: imgSrcMapType) =>
        b.date.getTime() - a.date.getTime()
    );
  };

  const sortByPoint = () => {
    imgSrcMap.sort((a: imgSrcMapType, b: imgSrcMapType) => b.point - a.point);
  };

  const sortView = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value);
  };

  useEffect(() => {
    window.addEventListener("resize", function () {
      setViewportWidth(window.innerWidth);
    });
    return window.removeEventListener("resize", function () {
      setViewportWidth(window.innerWidth);
    });
  }, []);

  const loadMoreImages = () => {
    const originArr = imgSrc.slice();
    const items = originArr.splice(0, 6);
    // items : 앞에 여섯개
    // originArr : 나머지

    setImgSrc([...originArr]);
    // 재료 배열 21 => 15 => 9 => 3 => 0

    const temp = imgSrcPart.concat(items);
    setImgSrcPart(temp);
    // 실제 배열 0 => 6 => 12 => 18 => 21

    // 모든 이미지를 로딩했는지 나타내는 조건식
    if (imgSrcMap.length <= temp.length) {
      setIsAllImageLoaded(true);
    }
  };

  const toggleOption = () => {
    setIsSearchOn((prev) => !prev);
  };

  // 마운트 이전에 한번 실행해줘야함
  useLayoutEffect(() => {
    loadMoreImages();
    handleSlideChange();
  }, []);

  return (
    <>
      <Bg>
        <ArtContent>
          <div className="artLogo">ARTS SPACE</div>
          <div className="carousel">
            <div className="carouselContent">
              <div className="test">
                <div className="swiperDetail">
                  <div className="swiperList">
                    <Swiper
                      ref={swiperRef}
                      onSlideChange={handleSlideChange}
                      loop
                      spaceBetween={50}
                      slidesPerView={1}
                      className="swiperTrack"
                      scrollbar={{ draggable: true }}
                      navigation
                      pagination={{ clickable: true }}
                      breakpoints={{
                        500: {
                          slidesPerView: 1,
                        },
                        700: {
                          slidesPerView: 2,
                        },
                        1100: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {counseolImg.map((ele: any) => (
                        <SwiperSlide key={ele.name}>
                          <div className="swiperHexagon">
                            <SwiperHexagon>
                              <img
                                src={ele.name}
                                alt={ele.alt}
                                className="hexagonImg"
                              />
                            </SwiperHexagon>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="swiperTitle">
                  <img src="left-arrow.svg" />
                  <div>{currentContent}</div>
                  <img src="right-arrow.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="observerContents">
            <div className="searchContents">
              <div className="searchMenu">
                {currentLanguage === "EN" && (
                  <>
                    <div
                      className="menuTitle"
                      onClick={() => {
                        setOrder("Newest");
                      }}
                    >
                      Newest
                    </div>
                    <div
                      className="menuTitle"
                      onClick={() => {
                        setOrder("Popular");
                      }}
                    >
                      Popular
                    </div>
                    <div
                      className="menuTitle"
                      onClick={() => {
                        setOrder("Most Liked");
                      }}
                    >
                      Most Liked
                    </div>
                  </>
                )}
                {currentLanguage === "KR" && (
                  <>
                    <div
                      className="menuTitle"
                      onClick={() => {
                        setOrder("Newest");
                      }}
                    >
                      최신순
                    </div>
                    <div
                      className="menuTitle"
                      onClick={() => {
                        setOrder("Popular");
                      }}
                    >
                      조회순
                    </div>
                    <div
                      className="menuTitle"
                      onClick={() => {
                        setOrder("Most Liked");
                      }}
                    >
                      좋아요순
                    </div>
                  </>
                )}
              </div>
              {currentLanguage === "EN" && (
                <>
                  <div className="miniSearch">
                    <select
                      name="sort"
                      className="selectMenu"
                      onChange={sortView}
                    >
                      <option value="Newest">Newest</option>
                      <option value="Popular">Popular</option>
                      <option value="Most Liked">Most Liked</option>
                    </select>
                    <img
                      src="search.jpg"
                      width={"40px"}
                      className="miniIcon"
                      onClick={toggleOption}
                    />
                  </div>
                </>
              )}
              {currentLanguage === "KR" && (
                <div className="miniSearch">
                  <select
                    name="sort"
                    className="selectMenu"
                    onChange={sortView}
                  >
                    <option value="Newest">최신순</option>
                    <option value="Popular">조회순</option>
                    <option value="Most Liked">좋아요순</option>
                  </select>
                  <img
                    src="search.jpg"
                    width={"40px"}
                    className="miniIcon"
                    onClick={toggleOption}
                  />
                </div>
              )}
              {isSearchOn && (
                <div className="miniSearchView">
                  {currentLanguage === "EN" && (
                    <input placeholder="Search" className="searchHolder" />
                  )}
                  {currentLanguage === "KR" && (
                    <input placeholder="검색" className="searchHolder" />
                  )}
                </div>
              )}

              <div className="search">
                {currentLanguage === "EN" && (
                  <input placeholder="Search" className="searchHolder" />
                )}
                {currentLanguage === "KR" && (
                  <input placeholder="검색" className="searchHolder" />
                )}
                <img src="search.jpg" />
              </div>
            </div>
            <FlexBox>
              {imgSrcPart.map((ele: any) => (
                <div key={ele.name}>
                  <Hexagon>
                    <img src={ele.name} alt={ele.art} className="hexagonImg" />
                  </Hexagon>
                </div>
              ))}
            </FlexBox>
            {/* 모든 컨텐츠를 불러온 후에는 더불러오기 버튼 제거하기 */}

            {!isAllImageLoaded && (
              <>
                <div className="moreContents">
                  <button onClick={loadMoreImages} className="moreButton">
                    {currentLanguage === "KR" && <>불러오기</>}
                    {currentLanguage === "EN" && <>MORE</>}
                    &nbsp;
                    <br />
                    <img src="arrow-down.svg" className="moreArrow" />
                  </button>
                </div>
              </>
            )}
          </div>
        </ArtContent>
      </Bg>
    </>
  );
};

export default Content;
