import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    border: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    border: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...placeholder }) => {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <DisplayIcon style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </DisplayIcon>
      <Label
        {...placeholder}
        style={{
          "--width": width + "px",
          "--height": styles.height / 16 + "rem",
          "--border-thickness": styles.border + "px",
          "--font-size": styles.fontSize / 16 + "rem",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const DisplayIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const Label = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
