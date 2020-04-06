import React from "react";
import { View, StyleSheet, Picker } from "react-native";

import { HorizontalLayout } from "../layouts/HorizontalLayout-cmp";
import { Padded } from "../layouts/Padded-cmp";

const invariantStyleSheet = StyleSheet.create({
  picker: {
    width: 100,
    height: 35
  }
});

export const roundTime = (date, minuteStep = 5) => {
  const newDate = new Date(date.getTime());
  const minutes = newDate.getMinutes();
  newDate.setMilliseconds(0);
  newDate.setSeconds(0);
  newDate.setMinutes((minutes / minuteStep).toFixed(0) * minuteStep);
  newDate.setDate(1);
  newDate.setMonth(0);
  newDate.setFullYear(1970);
  return newDate;
};

export const TimePicker = ({ date, onDateChange }) => {
  const changeHour = (h) => {
    const newDate = new Date(date.getTime());
    newDate.setMilliseconds(0);
    newDate.setSeconds(0);
    newDate.setHours(h);
    onDateChange(newDate);
  };

  const changeMinutes = (m) => {
    const newDate = new Date(date.getTime());
    newDate.setMilliseconds(0);
    newDate.setSeconds(0);
    newDate.setMinutes(m);
    onDateChange(newDate);
  };

  return (
    <Padded>
      <HorizontalLayout>
        <Padded>
          <ForBasedNumberPicker
            value={date.getHours()}
            onChange={changeHour}
            min={0}
            max={23}
            step={1}
          />
        </Padded>
        <Padded>
          <ForBasedNumberPicker
            value={date.getMinutes()}
            onChange={changeMinutes}
            min={0}
            max={55}
            step={5}
          />
        </Padded>
      </HorizontalLayout>
    </Padded>
  );
};

export const ForBasedNumberPicker = ({ value, onChange, min, max, step }) => {
  const roundedValue = (value / step).toFixed(0) * step;

  const hourItems = [];
  for (let i = min; i <= max; i = i + step) {
    const label = ("0" + i).slice(-2);

    hourItems.push(<Picker.Item key={label} label={label} value={i} />);
  }

  return (
    <Picker
      selectedValue={roundedValue}
      onValueChange={onChange}
      style={invariantStyleSheet.picker}
    >
      {hourItems}
    </Picker>
  );
};
