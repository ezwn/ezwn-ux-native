import React from "react";
import { Text } from "react-native";

export const LocalTime = ({ dateISOString, textStyle }) => (
  <DateISOStringBasedLocalTime
    dateISOString={dateISOString}
    textStyle={textStyle}
  />
);

const DateISOStringBasedLocalTime = ({ dateISOString, textStyle }) => (
  <Text style={textStyle}>
    {new Date(dateISOString).toLocaleTimeString().substring(0, 5)}
  </Text>
);
