import React from "react";
import { View, StyleSheet, Text } from "react-native";

const invariantStyleSheet = StyleSheet.create({
  field: {
    padding: 15
  }
});

export const Field = ({ children, label }) => {
  return <View style={invariantStyleSheet.field}>
    {label && <Text>{label}</Text>}
    {children}
  </View>;
};
