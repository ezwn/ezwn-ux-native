import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button } from "ezwn-ux-native/app-components/Button-cmp";
import { HorizontalLayout } from "ezwn-ux-native/layouts/HorizontalLayout-cmp";
import React, { useEffect, useState } from "react";
import { TextInput } from "./TextInput-cmp";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { VerticalLayout } from "ezwn-ux-native/layouts/VerticalLayout-cmp";

const isNumberValid = ({ nullable, min = null, max = null }) => (value) => {

  if (!nullable && (value===null || value===undefined)) {
    return false;
  }

  if (min !== null && value < min) {
    return false;
  }

  if (max !== null && value > max) {
    return false;
  }

  return true;
}

export const NumberInput = ({
  value: initialValue,
  onChange,
  onValidityChange,
  autoFocus,
  nullable,
  min,
  max,
  vertical,
  width
}) => {
  const [incomingValue, setIncomingValue] = useState(initialValue);
  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = React.useState(isNumberValid({ nullable, min, max })(initialValue));

  const updateValid = (valid, value) => {
    setValid(valid);
    onValidityChange && onValidityChange(valid, value);
  }

  useEffect(() => {
    const valid = isNumberValid({ nullable, min, max })(incomingValue);
    updateValid(valid, incomingValue);
    setValue(incomingValue);
  }, [incomingValue]);

  const onTextInputChange = () => {
    if (valid) {
      onChange(value);
    }
  };

  const onTextInputValidityChange = (validity, newValue) => {
    if (!validity) {
      updateValid(false, NaN);
    }

    const correctedValue = newValue
      .replace(/[^0-9.,-]/g, "")
      .replace(/[,]/g, ".")
      .replace(/[.]+/g, ".");

    const floatValue = parseFloat(correctedValue);
    if (floatValue === NaN) {
      updateValid(false, NaN);
      return;
    }

    const valid = isNumberValid({ nullable, min, max })(floatValue);
    setValue(floatValue);
    updateValid(valid, floatValue);
  }

  const prevValue = value - 1;
  const prevValueValid = isNumberValid({ nullable, min, max })(prevValue);
  const onMinus = () => {
    setIncomingValue(prevValue);
    onChange(prevValue);
  }

  const nextValue = value + 1;
  const nextValueValid = isNumberValid({ nullable, min, max })(nextValue);
  const onPlus = () => {
    setIncomingValue(nextValue);
    onChange(nextValue);
  }

  const wrap = (node) => {
    if (vertical) {
      return <VerticalLayout>
        <Button onPress={onPlus} enabled={nextValueValid} >
          <FontAwesomeIcon icon={icons["faPlus"]} color="black" />
          </Button>
        {node}
        <Button onPress={onMinus} enabled={prevValueValid}><FontAwesomeIcon icon={icons["faMinus"]} color="black" /></Button>
      </VerticalLayout>
    } else {
      return <HorizontalLayout style={{ justifyContent: "left" }}>
        {node}
        <Button onPress={onMinus} enabled={prevValueValid}><FontAwesomeIcon icon={icons["faMinus"]} color="black" /></Button>
        <Button onPress={onPlus} enabled={nextValueValid}><FontAwesomeIcon icon={icons["faPlus"]} color="black" /></Button>
      </HorizontalLayout>
    }
  }

  return wrap(
    <TextInput
      autoFocus={!!autoFocus}
      onChange={onTextInputChange}
      onValidityChange={onTextInputValidityChange}
      value={"" + incomingValue}
      forceInvalid={!valid}
      style={{ width }}
    />
  );
};

NumberInput.defaultProps = {
  width: 90
}
