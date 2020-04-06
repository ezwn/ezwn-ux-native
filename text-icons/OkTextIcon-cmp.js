import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const OkTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faCheck} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

OkTextIcon.defaultProps = {
  text: "OK"
};
