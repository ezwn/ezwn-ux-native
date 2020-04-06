import React from "react";
import { TextInput as ReactNativeTextInput } from "react-native";

export const TextInput = ({
  onChangeText,
  value,
  autoFocus,
  multiline,
  height
}) => (
  <ReactNativeTextInput
    style={{
      height: height || 40,
      borderColor: "gray",
      borderWidth: 1,
      paddingLeft: 4,
      paddingRight: 4
    }}
    autoFocus={!!autoFocus}
    onChangeText={onChangeText}
    value={value}
    multiline={multiline}
  />
);
