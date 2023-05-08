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
            padding: 0px 30%;
            height: 378px;
            margin: 0;
            padding: 0;
            position: relative;
            display: block;
            @media (min-width: 1100px) {
              height: 636px;
            }
            .swiperHexagon {
              display: flex;
              flex-direction: row;
            }
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
      .search {
        width: 100%;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        border: 1px solid rgb(88, 88, 89);
        border-radius: 5px;
        height: 32px;
        padding: 0px 10px;
        @media (min-width: 1100px) {
          height: 40px;
          border-radius: 20px;
          width: 40%;
          min-width: 350px;
          max-width: 405px;
          padding: 0px 24px;
        }
        .serachHolder {
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
  background-color: #6c6;
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
  border: 1px solid purple;
  @media (min-width: 1100px) {
    width: ${(props: any) => props.viewportWidth} / 5;
    height: ${(props: any) => props.viewportWidth} / 5;
  }
  .hexagonImg {
    object-fit: fill;
    width: 100%;
    height: 100%;

    @media (min-width: 1100px) {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
`;
export const SwiperHexagon = styled.div`
  width: ${(props: any) => props.viewportWidth} / 5;
  height: ${(props: any) => props.viewportWidth} / 5;
  background-color: #6c6;
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
  border: 1px solid purple;
  @media (min-width: 1100px) {
    width: ${(props: any) => props.viewportWidth} / 5;
    height: ${(props: any) => props.viewportWidth} / 5;
  }
  .hexagonImg {
    object-fit: cover;
    width: 100%;
    height: 100%;

    @media (min-width: 1100px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
