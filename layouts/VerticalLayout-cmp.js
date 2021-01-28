import React from "react";
import { View, StyleSheet } from "react-native";

const invariantStyleSheet = StyleSheet.create({
  verticalLayout: {
    alignItems: "center"
  }
});

export const VerticalLayout = ({ children, style }) => {

  const finalStyle = [invariantStyleSheet.verticalLayout];

  if (style) {
    finalStyle.push(style);
  }

  return (<View style={finalStyle}>{children}</View>);
};
