import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

//Styles
import { TopLevelWrapper, Wrapper, Content, Text } from "./HeroImage.styles";

//Components
import HeroButtonNext from "../HeroButtons/HeroButtonNext/HeroButtonNext";
import HeroButtonPrev from "../HeroButtons/HeroButtonPrev/HeroButtonPrev";

//Buttons

const HeroImage = ({
  image,
  title,
  text,
  movieId,
  state,
  currentHero,
  setCurrentHero,
}) => {
  const goToNextHero = function () {
    setCurrentHero(currentHero + 1);
  };

  const goToPreviousHero = function () {
    setCurrentHero(currentHero - 1);
  };

  return (
    <>
      <TopLevelWrapper>
        {currentHero > 0 ? (
          <HeroButtonPrev onClick={() => goToPreviousHero()}>
            Prev
          </HeroButtonPrev>
        ) : (
          ""
        )}
        {currentHero < state.results.length - 1 ? (
          <HeroButtonNext position="right" onClick={() => goToNextHero()}>
            Next
          </HeroButtonNext>
        ) : (
          ""
        )}
        <Link to={`/${movieId}`}>
          <Wrapper image={image}>
            <Content>
              <Text>
                <h1>{title}</h1>
                <p>{text}</p>
              </Text>
            </Content>
          </Wrapper>
        </Link>
      </TopLevelWrapper>
    </>
  );
};

export default HeroImage;
