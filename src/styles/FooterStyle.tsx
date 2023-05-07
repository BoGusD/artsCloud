import styled from "styled-components";

export const Bg = styled.div`
  padding: 50px 20px 52px 20px;
  background-color: #161618;
  width: 100vw;
  color: #ffffff;
  text-align: center;
  position: relative;
  @media (min-width: 1100px) {
    padding: 75px 80px;
    height: 244px;
  }
  .footerLogo {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 30px;
    margin-left: 50px;
    position: relative;
    height: 30px;
    @media (min-width: 1100px) {
      position: absolute;
      top: 74px;
      left: 80px;
      margin-top: 0;
      width: 200px;
      height: 50px;
    }
  }
  .footerContent {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 12px;
    @media (min-width: 1100px) {
      justify-content: right;
      gap: 20px;
    }
    .imgIcon {
      -webkit-box-pack: center;
      justify-content: center;
      cursor: pointer;
      display: flex;
      position: relative;
      background-repeat: no-repeat;
    }
  }
`;
