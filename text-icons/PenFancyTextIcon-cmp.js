import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const PenFancyTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faPenFancy} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

PenFancyTextIcon.defaultProps = {
  text: "WRITE"
};
