import styled from "styled-components";

export const Bg = styled.div`
  position: relative;
  height: 100vh;
  background-color: black;
  color: white;
  font-size: 90px;
  font-family: GmarketSans;
  font-style: normal;
  font-weight: normal;
  box-sizing: border-box;
  gap: 40px;

  .flexBox {
    display: flex;
    flex-wrap: wrap;
  }
  .over1100 {
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    font-size: 24px;
    margin-top: 200px;
    left: 75%;
    margin-bottom: 20px;
    font-weight: bold;
    text-transform: uppercase;

    > div {
      width: 100px;
    }
    @media (max-width: 1100px) {
      display: none;
    }
  }
  .under1100 {
    position: relative;
    width: 600px;
    display: flex;
    font-size: 16px;

    .innerBox {
      margin-left: 50px;
    }
    @media (min-width: 1100px) {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    font-size: 30px;
  }
`;

export const TopMenu = styled.div`
  font-size: 24px;
  @media (max-width: 1100px) {
    font-size: 16px;
  }
  .imgIcon {
    width: 60px;
    @media (max-width: 1100px) {
      width: 34px;
    }
  }
`;

export const LeftBox = styled.div`
  width: 95%;
`;

export const IconBox = styled.div`
  width: 5%;
  display: flex;
  position: relative;
  flex-direction: column;
  color: white;
  cursor: pointer;
  margin-right: 20px 0 0;
  height: 350px;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: row;
    display: flex;
    position: relative;

    width: 300px;
    height: 100%;
  }
`;
