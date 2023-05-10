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
  background: linear-gradient(#0f0f11cc 20%, transparent);
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
  // tetz, 여기서 크기가 32px로 되어 있어서 크기다 달라짐
  // 기존 페이지를 보니 전체 크기는 88px 이고 안에 들어있는 애들이 32px 이라서, 88px 로 고정하고
  // 내부는 flex 수직 정렬이 좋을 것 같아서 변경 했습니다!
  height: 88px;
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
    margin-left: 20px;
    .imgLogo {
      object-fit: contain;
      cursor: pointer;
      height: 40px;
      text-transform: uppercase;
      @media (min-width: 1100px) {
        height: 56px;
      }
      @media (max-width: 600px) {
        width: 90%;
        height: 90%;
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
    // tetz, 오른쪽 메뉴 끼리 일정 이상 떨어져야 하므로 gap: 30px 를 여기다 부여
    gap: 30px;
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
      align-items: center;
      .languageLogo {
        display: flex;
        align-items: center;
        height: 20px;
        // tetz, margin-top 으로 인해 지구본이 아래로 내려가 있어서 해당 부분 삭제
        width: 20px;
        margin-right: 5px;
      }
      .sort {
        background-color: black;
        color: white;
      }
    }
    .headerButton {
      height: 100%;
      display: flex;

      background-color: transparent;
    }
    // button 추후에 진행예정
    .headerMenu {
      position: relative;
      width: 20px;
      height: 16px;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent !important;
      @media (min-width: 1100px) {
        width: 43px;
        height: 43px;
      }

      ::before {
        content: "";
        width: 20px;
        height: 2px;
        background-color: #ffffff;
        position: absolute;
        top: 0;
        transform-origin: left;
        transition-duration: 0.3s;
        @media (min-width: 1100px) {
          width: 43px;
          height: 4px;
          top: 12px;
        }
      }
    }
  }
`;
