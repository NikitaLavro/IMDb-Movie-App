import React from "react";

//Styles
import { Wrapper, Button } from "./HeroButtonPrev.styles";

//Image
import Image from "../../../images/leftPointer.svg";

const HeroButton = ({ position, onClick }) => {
  return (
    <Wrapper onClick={onClick} position={position}>
      <Button src={Image}></Button>
    </Wrapper>
  );
};

export default HeroButton;
