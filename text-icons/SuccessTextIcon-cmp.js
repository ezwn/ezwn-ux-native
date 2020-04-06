import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const SuccessTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faThumbsUp} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

SuccessTextIcon.defaultProps = {
  text: "Success"
};
