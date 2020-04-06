import React from "react";

import { View, Text, StyleSheet } from "react-native";

const invariantStyleSheet = StyleSheet.create({
  textIcon: {
    flexDirection: "column",
    alignItems: "center"
  },
  textIconText: {
    marginTop: 3,
    fontSize: 15
  }
});

export const TextIcon = ({ icon, text, textStyle }) => (
  <View style={invariantStyleSheet.textIcon}>
    {icon}
    {text && (
      <Text style={[invariantStyleSheet.textIconText, textStyle]}>{text}</Text>
    )}
  </View>
);
