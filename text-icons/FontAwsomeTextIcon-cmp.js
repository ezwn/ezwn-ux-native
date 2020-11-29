import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const FontAwesomeTextIcon = ({ color, textStyle, text, fontAwesomeIcon }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={icons[fontAwesomeIcon]} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

FontAwesomeTextIcon.defaultProps = {
  text: "CALENDAR"
};
