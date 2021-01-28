import React, { useEffect, useState } from "react";
import { NumberInput } from "./NumberInput-cmp";

const twoDigits = number => number<10 ? "0" + number : "" + number;

export const TimeInput = ({ value, onChange, onValidityChange }) => {

  const [initHour, initMinutes, initSeconds] = value.split(":");

  const [hour, setHour] = useState(parseInt(initHour));
  const [minutes, setMinutes] = useState(parseInt(initMinutes));
  const [seconds, setSeconds] = useState(parseInt(initSeconds));

  useEffect(() => {
    const time = `${twoDigits(hour)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
    onChange(time);
  }, [hour, minutes, seconds]);

  return (
    <>
      <NumberInput value={hour} onChange={setHour} vertical={true} width={27} min={0} max={23} />
      <NumberInput value={minutes} onChange={setMinutes} vertical={true} width={27} min={0} max={59} />
      <NumberInput value={seconds} onChange={setSeconds} vertical={true} width={27} min={0} max={59} />
    </>
  );
};
