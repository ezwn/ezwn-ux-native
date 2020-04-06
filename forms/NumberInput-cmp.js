import React, { useState } from "react";
import { TextInput } from "./TextInput-cmp";

export const NumberInput = ({ onChangeNumber, value, autoFocus }) => {
  const [textValue, setTextValue] = useState(value ? "" + value : value);

  const onChangeText = (newValue) => {
    const correctedValue = newValue
      .replace(/[^0-9.,-]/g, "")
      .replace(/[,]/g, ".")
      .replace(/[.]+/g, ".");

    setTextValue(correctedValue);

    const floatValue = parseFloat(correctedValue);
    onChangeNumber(floatValue);
  };

  return (
    <TextInput
      autoFocus={!!autoFocus}
      onChangeText={onChangeText}
      value={textValue}
    />
  );
};
