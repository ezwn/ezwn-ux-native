import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const CalendarTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faCalendarAlt} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

CalendarTextIcon.defaultProps = {
  text: "CALENDAR"
};
