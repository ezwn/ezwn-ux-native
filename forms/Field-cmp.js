import React from "react";
import { View, StyleSheet } from "react-native";

const invariantStyleSheet = StyleSheet.create({
  field: {
    padding: 15
  }
});

export const Field = ({ children }) => {
  return <View style={invariantStyleSheet.field}>{children}</View>;
};
