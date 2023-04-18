import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  color: #637488;
  padding: 10px 0;
  width: 100%;
  background: #101010;
  border: 1.5px solid #1d2a43;
  border-radius: 7px;
  margin: 20px 0 22px;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;
