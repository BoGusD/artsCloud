import styled from "styled-components";

export const Bg = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 360px;
  color: white;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  z-index: 5000;

  /* background: linear-gradient(#0f0f11cc 20%, transparent); */
  @media (min-width: 1100px) {
    height: 126px;
    padding: 0 80px;
  }
`;
export const Contents = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 32px;
  width: 100%;
  z-index: 5001;

  @media (min-width: 1100px) {
    height: 56px;
  }
  .logo {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    -webkit-tap-highlight-color: transparent !important;
    position: relative;
    .imgLogo {
      object-fit: contain;
      cursor: pointer;
      height: 40px;
      text-transform: uppercase;
      @media (min-width: 1100px) {
        height: 56px;
      }
    }
    @media (min-width: 1100px) {
      gap: 15px;
      font-size: 25px;
      width: 295px;
      height: 56px;
    }
  }

  .headerMenu {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    a {
      color: white;
    }
    .guideMenu {
      cursor: pointer;
    }
    .button {
      width: 70px;
      height: 20px;
      border: 1px solid transparent;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent !important;
      border-radius: 15px;
      background-color: #fa026b;
      color: #ffffff;
      font-size: 10px;
      line-height: 12px;
      text-transform: uppercase;
      align-items: center;
      gap: 30px;
      @media (min-width: 1100px) {
        height: 46px;
        border-radius: 33px;
        font-size: 16px;
        font-weight: bold;
        padding: 0 38px;
        width: 150px;
        line-height: 46px;
      }
    }
    @media (min-width: 1100px) {
      gap: 45px;
    }
    .languageMenu {
      display: flex;
      .languageLogo {
        height: 20px;
        width: 20px;
        margin-top: 20px;
        margin-right: 5px;
        justify-content: center;
      }
      .sort {
        background-color: black;
        color: white;
      }
    }
    // button 추후에 진행예정
  }
`;
