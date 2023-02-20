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

  let progress = "--progress": value + "px";
  let styles = SIZES[size];
  // let calc = round(value/370);
  return (
    <Wrapper role="progressbar" aria-label="progresslabel" style={styles}>
      <Slider value={value}></Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};;
  position: absolute;
  width: 370px;
  height: var(--height);
  border-radius: var(--cornerRadius);
  padding: var(--padding);
  overflow: hidden;
`;

const Slider = styled.div`
  background-color: ${COLORS.primary};
  position: absolute;
  margin-left: 0;
  height: var(--sliderHeight);
  border-radius: var(--padding) 0 0 4px;
  width: calc(var(--value)/100*370px);
`;

export default ProgressBar;
