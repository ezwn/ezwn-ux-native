import React from "react";
import { View, StyleSheet } from "react-native";

const invariantStyleSheet = StyleSheet.create({
  horizontalLayout: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center"
  }
});

export const HorizontalLayout = ({ children, style }) => {

  const styleList = [invariantStyleSheet.horizontalLayout];
  if (style) {
    styleList.push(style);
  }

  return <View style={styleList}>{children}</View>;
};
