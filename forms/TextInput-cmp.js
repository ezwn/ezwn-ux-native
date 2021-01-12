import React, { useEffect } from "react";
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
  onChange,
  value: initialValue,
  autoFocus,
  multiline,
  height
}) => {
  if (!onChange)
    throw new Error()

  const [value, onChangeText] = React.useState(initialValue);

  useEffect(() => {
    if (initialValue !== value) {
      onChangeText(initialValue);
    }
  }, [initialValue])

  const style = multiline ? [invariantStyleSheet.field, { height }] : invariantStyleSheet.field;

  return <ReactNativeTextInput
    style={style}
    autoFocus={!!autoFocus}
    value={value}
    onChangeText={onChangeText}
    onBlur={() => onChange(value)}
    multiline={multiline}
  />
};
