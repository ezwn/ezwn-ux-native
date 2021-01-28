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

export const VerticalBorderLayout = ({ top, children, bottom, style }) => {
  const {
    styleSheet
  } = useUxContext();

  const middelArreaStyle = [invariantStyleSheet.middleArea];

  if (style) {
    middelArreaStyle.push(style);
  }

  return (
    <View
      style={[
        invariantStyleSheet.verticalBorderLayout,
        styleSheet.verticalBorderLayout
      ]}
    >
      {top}
      <View style={middelArreaStyle}>{children}</View>
      {bottom}
    </View>
  );
};
