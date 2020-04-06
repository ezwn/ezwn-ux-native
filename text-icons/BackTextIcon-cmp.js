import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const BackTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faArrowLeft} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

BackTextIcon.defaultProps = {
  text: "BACK"
};
