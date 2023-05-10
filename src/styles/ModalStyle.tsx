import styled from "styled-components";

export const Bg = styled.nav`
  padding: 78px 45px 0 45px;
  background-color: #0f0f11;
  width: 100%;
  min-width: 360px;
  height: 1000vh;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0);
  transition-duration: 0.3s;
  color: #ffffff;
  @media (min-width: 1100px) {
    padding: 126px 80px 0 170px;
  }
`;
export const ModalContents = styled.div`
  color: white;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  height: 100%;

  .contents {
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 50px;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    @media (min-width: 1100px) {
      margin-top: 0px;
      gap: 80px;
      height: 100%;
      width: 100%;
    }
    .topMenu {
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 34px;
      gap: 14px;
      @media (min-width: 1100px) {
        font-size: 24px;
        gap: 30px;
        height: auto;
      }
      .item {
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        gap: 8px;
        -webkit-tap-highlight-color: transparent !important;
        @media (min-width: 1100px) {
          gap: 30px;
        }
        .profileImage {
          background-color: #5a45fa;
          width: 34px;
          height: 34px;
          border-radius: 100%;
          position: relative;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          @media (min-width: 1100px) {
            width: 60px;
            height: 60px;
          }
          .profileImg {
            width: 34px;
            height: 34px;
            @media (min-width: 1100px) {
              width: 60px;
              height: 60px;
            }
          }
        }
        .barIcon {
          border: 1px solid #585859;
          height: 15px;
          margin: 5px 5px 0;
          color: white !important;
          @media (min-width: 1100px) {
            height: 20px;
            margin-top: 5px;
          }
        }
        .span {
          padding: 0.15vw 0;
        }
      }
    }
  }
  .menu-item {
    font-size: 34px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent !important;
    text-transform: uppercase;
    @media (min-width: 1100px) {
      font-size: 90px;
    }
    :hover {
      background: linear-gradient(to bottom, #a840ff, #6f00cc, #ff002f);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    a {
      color: white;
      :hover {
        background: linear-gradient(to bottom, #a840ff, #6f00cc, #ff002f);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .underMenu {
    display: flex;
    gap: 30px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 60px;
    @media (min-width: 1100px) {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      -webkit-justify-content: end;
      justify-content: end;
      bottom: 96px;
      right: 170px;
      gap: 50px;
      font-size: 24px;
      margin-top: 50px;
      margin-bottom: 20px;
    }
    a {
      color: white;
    }
  }
`;
export const IconBox = styled.div`
  display: flex;
  gap: 10px;
  @media (min-width: 1100px) {
    position: absolute;
    right: 85px;
    -webkit-flex-direction: column;
    flex-direction: column;
    gap: 40px;
    margin-top: 50px;
  }
  .iconBox {
    display: flex;
    gap: 14px;
    @media (min-width: 1100px) {
      position: absolute;
      right: 200px;
      flex-direction: column;
      gap: 40px;
      margin-top: 50px;
      color: white;
    }
    .imgIcon {
      position: relative;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      cursor: pointer;
      background-repeat: no-repeat;
      background-size: 40px 40px;
      @media (min-width: 1100px) {
        width: 50px;
        height: 50px;
        background-size: 50px 50px;
      }
    }
  }
`;
