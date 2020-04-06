import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const FailureTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faThumbsDown} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

FailureTextIcon.defaultProps = {
  text: "Failure"
};
