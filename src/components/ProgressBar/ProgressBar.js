/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--sliderHeight": 8 + "px",
    "--cornerRadius": 4 + "px",
    "--padding": 0,
  },
  medium: {
    "--height": 12 + "px",
    "--sliderHeight": 12 + "px",
    "--cornerRadius": 4 + "px",
    "--padding": 0,
  },
  large: {
    "--height": 24 + "px",
    "--sliderHeight": 16 + "px",
    "--cornerRadius": 8 + "px",
    "--padding": 4 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  let styles = SIZES[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <SliderWrapper>
        <Slider style={{ "--width": value + "%" }}></Slider>
      </SliderWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  position: absolute;
  width: 370px;
  height: var(--height);
  border-radius: var(--cornerRadius);
  padding: var(--padding);
  overflow: hidden;
`;

const SliderWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Slider = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  height: var(--sliderHeight);
  width: var(--width);
`;

export default ProgressBar;
