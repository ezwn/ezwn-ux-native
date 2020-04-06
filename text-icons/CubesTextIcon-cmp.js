import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const CubesTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faCubes} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

CubesTextIcon.defaultProps = {
  text: ""
};
