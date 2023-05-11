import styled from "styled-components";

export const Bg = styled.div`
  padding-top: 80px;
  @media (min-width: 1100px) {
    padding-top: 126px;
  }
`;
export const ArtContent = styled.div`
  color: #ffffff;
  width: 100%;
  height: 100%;
  .swiper-slide-active:nth-child(2) {
    transform: scale(1.2); /* 확대 */
    opacity: 1; /* 불투명도 */
  }
  .swiper-slide:not(.swiper-slide-active) {
    transform: scale(0.8); /* 축소 */
    opacity: 0.5; /* 반투명도 */
  }
  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .swiperTitle {
    display: flex;
    text-align: center;
    justify-content: space-around;
    font-size: 20px;
    @media (min-width: 1100px) {
      font-size: 32px;
    }
  }
  .artLogo {
    font-weight: bold;
    text-align: center;
    font-size: 24px;
    margin-bottom: 30px;
    @media (min-width: 1100px) {
      font-size: 66px;
      margin-bottom: 68px;
    }
  }
  .craousel {
    margin: 0px auto 150px;
    width: 100%;
    @media (min-width: 1100px) {
      margin: 0px auto 178px;
    }
    .craouselContent {
      position: relative;
      margin: 0px auto;
      width: 100%;
      @media (min-width: 1100px) {
        height: 638px;
      }
      .test {
        margin: 0px auto;
        width: 100%;
        max-width: 1920px;
        .swiperDetail {
          position: relative;
          display: block;
          .swiperList {
            overflow: hidden;
            height: 384px;
            margin: 0;
            padding: 0;
            position: relative;
            display: block;

            @media (min-width: 1100px) {
              height: 636px;
            }

            /* .swiperTrack {
              display: flex;
              flex-direction: space-between;
              .swiperHexagon {
              }
            } */
          }
        }
      }
    }
  }
  .observerContents {
    padding: 0 20px;
    @media (min-width: 1100px) {
      margin-top: 100px;
      padding: 0 170px;
    }
    .searchContents {
      margin: 0 auto;
      max-width: 650px;
      @media (min-width: 1100px) {
        max-width: 1920px;
        margin: 0 auto;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
      }
      .searchMenu {
        display: none;
        @media (min-width: 1100px) {
          display: flex;
          -webkit-box-pack: justify;
          justify-content: space-between;
          line-height: 2;
        }
        .menuTitle {
          color: #585859;
          cursor: pointer;
          font-size: 18px;
          padding: 0 25px 0 0;
          :active {
            color: white;
          }
        }
      }
      .selectMenu {
        display: flex;
        width: 20%;
        margin-bottom: 15px;
        @media (min-width: 1100px) {
          display: none;
        }
      }
      .miniSearch {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        @media (min-width: 1100px) {
          display: none;
        }
        .miniIcon {
          display: block;
          margin-bottom: 10px;
        }
      }
      .miniSearchView {
        width: 100%;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        border: 1px solid rgb(88, 88, 89);
        border-radius: 5px;
        height: 32px;
        padding: 0px 10px;
        .searchHolder {
          background-color: transparent;
          color: rgb(255, 255, 255);
          line-height: 2.5;
          border: none;
          font-size: 12px;
          width: 100%;
        }
      }
      .search {
        display: none;
        @media (min-width: 1100px) {
          display: flex;
          height: 40px;
          border-radius: 20px;
          width: 40%;
          min-width: 350px;
          max-width: 405px;
          padding: 0px 24px;
        }
        .searchHolder {
          background-color: transparent;
          color: rgb(255, 255, 255);
          line-height: 2.5;
          border: none;
          font-size: 12px;
          width: 100%;
          @media (min-width: 1100px) {
            font-size: 18px;
          }
        }
      }
    }
  }
  .moreContents {
    text-align: center;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 80px;

    @media (min-width: 1100px) {
      margin: 120px 0;
    }
    .moreButton {
      padding: 0;
      border: none;
      background-color: transparent;
      text-transform: none;
      color: white;
      font-size: 32px;

      @media (min-width: 1100px) {
        font-size: 40px;
      }
    }
  }
`;
export const FlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 13px;
  padding-top: 50px;
  margin: 0px auto;
  max-width: 650px;
  min-height: 100vh;
  @media (min-width: 1100px) {
    max-width: 1920px;
    grid-template-columns: repeat(3, 26%);
    gap: 70px 11%;
    padding-bottom: 0px;
    min-height: 40vw;
  }
`;
export const Hexagon = styled.div`
  width: ${(props: any) => props.viewportWidth} / 5;
  height: ${(props: any) => props.viewportWidth} / 5;

  position: relative;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  @media (min-width: 1100px) {
    width: ${(props: any) => props.viewportWidth} / 5;
    height: ${(props: any) => props.viewportWidth} / 5;
  }
  .hexagonImg {
    object-fit: fill;
    width: 100%;
    height: 100%;
    /* opacity: 0.7; */
    @media (min-width: 1100px) {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
`;
export const SwiperHexagon = styled.div`
  width: ${(props: any) => props.viewportWidth} / 6;
  height: ${(props: any) => props.viewportWidth} / 6;

  position: relative;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  @media (min-width: 1100px) {
    width: ${(props: any) => props.viewportWidth} / 6;
    height: ${(props: any) => props.viewportWidth} / 6;
  }
  .hexagonImg {
    object-fit: contain;
    width: 100%;
    height: 100%;

    @media (min-width: 1100px) {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
export const TextStyle = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 100px;
`;
