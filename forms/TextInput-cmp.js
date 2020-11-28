import React from "react";
import { StyleSheet, TextInput as ReactNativeTextInput } from "react-native";

const invariantStyleSheet = StyleSheet.create({
  field: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
    paddingBottom: 4
  }
});

export const TextInput = ({
  onChangeText,
  value,
  autoFocus,
  multiline,
  height
}) => {

  const style = multiline ? [invariantStyleSheet.field, { height }] : invariantStyleSheet.field;

  return <ReactNativeTextInput
    style={style}
    autoFocus={!!autoFocus}
    onChangeText={onChangeText}
    value={value}
    multiline={multiline}
  />
};
