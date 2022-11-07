import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${(props) =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    background: ${(props) =>
      props.poster
        ? `url('${IMAGE_BASE_URL}${POSTER_SIZE}${props.poster}')`
        : "#000"};
    background-size: cover;
    background-position: center;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 1280px;

  margin: 0 auto;
  background: rgb(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    max-height: 700px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 0.5rem;
      z-index: 100;
    }
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
    margin: 0px 0 0 0;
  }
`;
