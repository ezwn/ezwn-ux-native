import React from "react";
import { View, StyleSheet } from "react-native";

const invariantStyleSheet = StyleSheet.create({
  Padded: {
    padding: 15
  }
});

export const Padded = ({ children }) => {
  return <View style={[invariantStyleSheet.Padded]}>{children}</View>;
};
