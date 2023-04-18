import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
`;
const LoadingWrapper = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingWrapper>
        <div className="pulse-dot pulse-dot-1"></div>
        <div className="pulse-dot pulse-dot-2"></div>
        <div className="pulse-dot pulse-dot-3"> </div>
      </LoadingWrapper>
    </LoadingContainer>
  );
};

export default Loading;
