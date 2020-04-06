import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const RemoveTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faMinus} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

RemoveTextIcon.defaultProps = {
  text: "ADD"
};
