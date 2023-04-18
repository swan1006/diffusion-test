import styled from "styled-components";

export const TradeContainter = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: "Circular Std";
`;
export const TradeWrapper = styled.div`
  & > div {
    width: 100%;
    position: relative;
    z-index: 1;
  }
  width: 464px;
  border-radius: 30px;
  padding: 33px 24px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #e5e54b9d, #d08f3a68);
  &::before {
    content: "";
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    position: absolute;
    top: 2px;
    left: 2px;
    background: #1e1e1e;
    border-radius: 30px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 207px;
    height: 202px;
    background: linear-gradient(135deg, #d08e3a 2.88%, #ef5322 98.14%);
    filter: blur(109px);
  }
`;

export const SettingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18.22px;
  margin-bottom: 23px;
  svg {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
      transform: scale(1.2);
    }
  }
`;
export const DividerContainer = styled.div`
  width: 100%;
  border: 1px solid #101010;
  position: relative;
  margin: 25px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ExchangeBtn = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #101010;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  svg {
    width: 10px;
  }
`;

export const ProSelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 21.33px;
`;

export const SwapBtn = styled.div`
  width: 100%;
  background: #e5e54b;
  border-radius: 14px;
  padding: 16px 0;
  margin-top: 22px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: #ffffff;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.02);
  }
`;

export const WalletConnectBtn = styled.div`
  width: 100%;
  background: #99c2ff;
  border-radius: 14px;
  padding: 16px 0;
  margin-top: 22px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: #ffffff;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.02);
  }
`;
