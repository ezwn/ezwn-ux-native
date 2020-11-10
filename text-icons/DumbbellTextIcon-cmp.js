import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const DumbbellTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faDumbbell} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

DumbbellTextIcon.defaultProps = {
  text: "TRAIN"
};
