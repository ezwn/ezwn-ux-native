import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const SettingsTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faBars} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

SettingsTextIcon.defaultProps = {
  text: "BACK"
};
