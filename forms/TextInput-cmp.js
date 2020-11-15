import React from "react";
import { StyleSheet, TextInput as ReactNativeTextInput } from "react-native";

const invariantStyleSheet = StyleSheet.create({
  field: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 4,
    paddingRight: 4
  }
});

export const TextInput = ({
  onChangeText,
  value,
  autoFocus,
  multiline
}) => (
  <ReactNativeTextInput
    style={invariantStyleSheet.field}
    autoFocus={!!autoFocus}
    onChangeText={onChangeText}
    value={value}
    multiline={multiline}
  />
);
