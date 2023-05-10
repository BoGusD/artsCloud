import { useState, useEffect, useLayoutEffect } from "react";
import { Bg, ArtContent, FlexBox, Hexagon } from "@/styles/ContentStyle";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { imgSrcMap } from "@/data/imgSourceMap";
import { useRecoilValue } from "recoil";
import { currentLanguageState } from "@/module/recoil";
import { imgSrcMapType } from "@/data/imgSourceMap";
import CarouselContent from "./CarouselContent";

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
  const [order, setOrder] = useState("default");

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

  const sortOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
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

  // 마운트 이전에 실행
  useLayoutEffect(() => {
    loadMoreImages();
  }, []);

  return (
    <>
      <Bg>
        <ArtContent>
          <div className="artLogo">ARTS SPACE</div>

          <CarouselContent />
          <div className="observerContents">
            <div className="searchContents">
              <div className="searchMenu">
                {currentLanguage === "EN" ? (
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
                ) : (
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
              {currentLanguage === "EN" ? (
                <>
                  <div className="miniSearch">
                    <select
                      name="sort"
                      className="selectMenu"
                      onChange={sortOption}
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
              ) : (
                <div className="miniSearch">
                  <select
                    name="sort"
                    className="selectMenu"
                    onChange={sortOption}
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
                  {currentLanguage === "EN" ? (
                    <input placeholder="Search" className="searchHolder" />
                  ) : (
                    <input placeholder="검색" className="searchHolder" />
                  )}
                </div>
              )}

              <div className="search">
                {currentLanguage === "EN" ? (
                  <input placeholder="Search" className="searchHolder" />
                ) : (
                  <input placeholder="검색" className="searchHolder" />
                )}
                <img src="search.jpg" />
              </div>
            </div>
            <FlexBox>
              {imgSrcPart.map((ele: imgSrcMapType) => (
                <div key={ele.name}>
                  <Hexagon>
                    <img src={ele.name} alt={ele.alt} className="hexagonImg" />
                  </Hexagon>
                </div>
              ))}
            </FlexBox>

            {!isAllImageLoaded && (
              <>
                <div className="moreContents">
                  <button onClick={loadMoreImages} className="moreButton">
                    {currentLanguage === "KR" ? <>불러오기</> : <>MORE</>}
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
