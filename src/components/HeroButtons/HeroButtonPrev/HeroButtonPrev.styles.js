import styled from "styled-components";

export const Wrapper = styled.div`
  width: 15%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  z-index: 100;
  cursor: pointer;

  :hover {
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(85, 85, 85, 0.9317927854735644) 88%
    );
    animation: animateButtonPrev 0.2s linear;

    @keyframes animateButtonPrev {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const Button = styled.img`
  height: 100px;
  width: 100px;

  @media screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;
