import styled from "styled-components";

export const ExchangeContainer = styled.div`
  width: calc(100% - 36px);
  background-color: #101010;
  padding: 18px;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
`;

export const ValueContainer = styled.div`
  input {
    font-style: normal;
    font-weight: 500;
    background-color: transparent;
    outline: none;
    font-size: 25px;
    border: none;
    line-height: 42px;
    display: flex;
    align-items: center;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    width: 200px;
  }
`;
export const TokenListContainer = styled.div``;

export const SubTitle = styled.div<{ isAlign?: boolean }>`
  font-style: normal;
  display: flex;
  justify-content: ${(props) => (props.isAlign ? "flex-start" : "flex-end")};
  font-weight: 500;
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #7185aa;
`;

export const TokenSelecter = styled.div`
  display: flex;
  align-items: center;
`;
export const MinBtn = styled.div`
  background: #141822;
  cursor: pointer;
  padding: 5px 10px;
  margin-right: 14px;
  border: 0.5px solid #e5e54b;
  border-radius: 7px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e5e5e5;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;
export const TokenDropDown = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;
  background: #141822;
  width: 135px;
  border-radius: 24px 6px 6px 24px;
  padding: 5px 7px 5px 5px;
  img {
    width: 40px;
    border-radius: 50%;
  }
  span {
    display: block;
    margin: 0 8px 0 4px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #e5e5e5;
  }
`;

export const TokenDownListContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 999;
  background-color: #141822;
  border-radius: 10px;
  top: calc(100% + 10px);
  padding: 10px 0;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: darkgrey;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;

export const TokenDropDownWrapper = styled.div`
  position: relative;
`;

export const TokenListItem = styled.div`
  display: flex;
  cursor: pointer;
  padding: 5px;
  transition: all 0.3s;
  img {
    width: 40px;
  }
  span {
    margin: 0 8px 0 4px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #e5e5e5;
  }
  &:hover {
    background-color: #ffffff10;
  }
`;
export const LoadingContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;
