import React from "react";
import { TextInput } from "./TextInput-cmp";

function twoDigits(number) {
  if (number<10)
    return `0${number}`;

  return `${number}`
}

function formatDate(rawValue) {
  if (!rawValue)
    return "";

  const h = Math.floor(rawValue / 3600)
  const m = Math.floor((rawValue - h * 3600) / 60)
  const s = (rawValue - h * 3600 - m * 60)

  return `${twoDigits(h)}:${twoDigits(m)}:${twoDigits(s)}`
}

export const DurationInput = ({ value, onChange, autoFocus }) => {

  const interceptOnChange = (value) => {
    const parts = value.split(":");
    if (parts.length === 3) {
      const [h, m, s] = parts;
      const sec = (parseInt(h) * 60 + parseInt(m)) * 60 + parseInt(s);
      onChange(sec);
    } else {
      onChange(parseInt(value));
    }
  }

  return (
    <TextInput
      autoFocus={!!autoFocus}
      value={formatDate(value)}
      onChange={interceptOnChange}
    />
  );
};
