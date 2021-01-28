import React, { useEffect } from "react";
import { StyleSheet, TextInput as ReactNativeTextInput } from "react-native";

const isTextValid = ({ nullable, minLength=null, maxLength=null }) => (value) => {
  if (!nullable && (value===null || value===undefined)) {
    return false;
  }

  if (minLength!==null && value.length<minLength) {
    return false;
  }

  if (maxLength!==null && value.length>maxLength) {
    return false;
  }

  return true;
}

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
  value: initialValue,
  onChange,
  onValidityChange,
  autoFocus,
  multiline,
  height,
  secureTextEntry,
  nullable,
  minLength,
  maxLength,
  forceInvalid,
  style: incomingStyle
}) => {
  if (!onChange)
    throw new Error()

  const [value, setValue] = React.useState(initialValue);
  const [valid, setValid] = React.useState(isTextValid({ nullable, minLength, maxLength })(initialValue));

  const updateValid = (valid, value) => {
    setValid(valid);
    onValidityChange && onValidityChange(valid, value);
  }

  useEffect(() => {
    updateValid(isTextValid({ nullable, minLength, maxLength })(initialValue), initialValue);
  }, []);

  useEffect(() => {
    if (initialValue !== value) {
      setValue(initialValue);
      updateValid(isTextValid({ nullable, minLength, maxLength })(initialValue), initialValue);
    }
  }, [initialValue])

  const onBlur = () => {
    if (valid) {
      onChange(value);
    }
  };

  const onChangeText = (value) => {
    setValue(value);
    const validity = isTextValid({ nullable, minLength, maxLength })(value);
    updateValid(validity, value);
  };

  const style = [invariantStyleSheet.field];

  if (multiline) {
    style.push({ height });
  }

  if (!valid || forceInvalid) {
    style.push({ borderColor: "red" });
  }

  if (incomingStyle) {
    style.push(incomingStyle);
  }


  return <ReactNativeTextInput
    style={style}
    autoFocus={!!autoFocus}
    value={value}
    onChangeText={onChangeText}
    onBlur={onBlur}
    multiline={multiline}
    secureTextEntry={secureTextEntry}
  />
};
