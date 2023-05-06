import styled from "styled-components";

export const Bg = styled.div`
  background-color: black;
  justify-content: space-between;
  align-items: center;
  position: relative;
  display: flex;
  color: white;

  .imgLogo {
    height: 56px;
    margin-top: 20px;
    @media (max-width: 1100px) {
      height: 40px;
    }
  }
  .languageLogo {
    height: 20px;
    width: 20px;
    margin-top: 20px;
  }
  .headerMenu {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 20px;
  }
  .guideMenu {
    margin-right: 60px;
    margin-top: 20px;
    cursor: pointer;
  }
  .button {
    background-color: #fa026b;
    border: 1px solid transparent;
    text-transform: uppercase;
    cursor: pointer;
    height: 46px;
    line-height: 46px;
    border-radius: 33px;
    width: 150px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }
`;
