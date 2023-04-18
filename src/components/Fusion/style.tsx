import styled from "styled-components";

export const FusionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  background: #101010;
  border-radius: 13px;
  cursor: pointer;
`;
export const TokenContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    font-style: normal;
    font-weight: 450;
    margin-left: 8px;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #ffffff;
    span {
      color: #637488;
    }
  }
`;
export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    font-style: normal;
    font-weight: 450;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    margin: 0 10px 0 4px;
    align-items: center;
    color: #637488;
  }
`;
