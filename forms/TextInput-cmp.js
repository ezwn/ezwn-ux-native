import React, { useEffect } from "react";
import { StyleSheet, TextInput as ReactNativeTextInput } from "react-native";

const isTextValid = ({ nullable, minLength=null, maxLength=null, pattern=null }) => (value) => {
  if (!nullable && (value===null || value===undefined)) {
    return false;
  }

  if (minLength!==null && value.length<minLength) {
    return false;
  }

  if (maxLength!==null && value.length>maxLength) {
    return false;
  }

  if (pattern && !(pattern.test(value))) {
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
  style: incomingStyle,
  pattern
}) => {
  if (!onChange)
    throw new Error()

  const validator = isTextValid({ nullable, minLength, maxLength, pattern })

  const [value, setValue] = React.useState(initialValue);
  const [valid, setValid] = React.useState(validator(initialValue));

  const updateValid = (valid, value) => {
    setValid(valid);
    onValidityChange && onValidityChange(valid, value);
  }

  useEffect(() => {
    updateValid(validator(initialValue), initialValue);
  }, []);

  useEffect(() => {
    if (initialValue !== value) {
      setValue(initialValue);
      updateValid(validator(initialValue), initialValue);
    }
  }, [initialValue])

  const onBlur = () => {
    if (valid) {
      onChange(value);
    }
  };

  const onChangeText = (value) => {
    setValue(value);
    const validity = validator(value);
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
