import React from "react";
import { View, StyleSheet } from "react-native";

import { useUxContext } from "../UxContext";

const invariantStyleSheet = StyleSheet.create({
  verticalBorderLayout: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  },
  middleArea: {
    flex: 1
  }
});

export const VerticalBorderLayout = ({ top, children, bottom }) => {
  const {
    styleSheet
  } = useUxContext();

  return (
    <View
      style={[
        invariantStyleSheet.verticalBorderLayout,
        styleSheet.verticalBorderLayout
      ]}
    >
      {top}
      <View style={invariantStyleSheet.middleArea}>{children}</View>
      {bottom}
    </View>
  );
};
