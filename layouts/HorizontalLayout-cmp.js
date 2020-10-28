import React from "react";
import { View, StyleSheet } from "react-native";

const invariantStyleSheet = StyleSheet.create({
  horizontalLayout: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center"
  }
});

export const HorizontalLayout = ({ children }) => {
  return <View style={invariantStyleSheet.horizontalLayout}>{children}</View>;
};
