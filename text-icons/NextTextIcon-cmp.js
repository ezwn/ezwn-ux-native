import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const NextTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faArrowRight} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

NextTextIcon.defaultProps = {
  text: "NEXT"
};
