import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const ChartLineTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faChartLine} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

ChartLineTextIcon.defaultProps = {
  text: "Chart"
};
