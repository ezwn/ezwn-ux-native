import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const AddTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faPlus} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

AddTextIcon.defaultProps = {
  text: "ADD"
};
