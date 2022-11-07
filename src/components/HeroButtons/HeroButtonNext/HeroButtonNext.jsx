import React from "react";

//Styles
import { Wrapper, Button } from "./HeroButtonNext.styles";

//Image
import Right from "../../../images/rightArrow.svg";

const HeroButton = ({ position, onClick }) => {
  return (
    <Wrapper onClick={onClick} position={position}>
      <Button src={Right}></Button>
    </Wrapper>
  );
};

export default HeroButton;
