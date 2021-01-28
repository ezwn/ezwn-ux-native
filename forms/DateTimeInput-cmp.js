import { HorizontalLayout } from "ezwn-ux-native/layouts/HorizontalLayout-cmp";
import React, { useEffect, useState } from "react";
import { DateInput } from "./DateInput-cmp";
import { TimeInput } from "./TimeInput-cmp";

const splitDateTime = (dateTime) => {
  return dateTime.split("T")
};

export const DateTimeInput = ({ value: initialValue, onChange, onValidityChange }) => {

  const [initialDate, initialTime] = splitDateTime(initialValue);

  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const datetime = `${date}T${time}`;
    console.log(datetime)
    onChange(datetime);
  }, [date, time]);

  useEffect(() => {
    onValidityChange(true);
  }, []);

  return (
    <HorizontalLayout style={{ justifyContent: "left" }}>
      <DateInput
        value={date}
        onChange={setDate}
      />
      <TimeInput
        value={time}
        onChange={setTime}
      />
    </HorizontalLayout>
  );
};
