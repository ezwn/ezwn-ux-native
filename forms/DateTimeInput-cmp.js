import React from "react";
import { TextInput } from "./TextInput-cmp";

export const DateTimeInput = ({ value, onChange, autoFocus }) => {
  return (
    <>
      <TextInput
        autoFocus={!!autoFocus}
        value={value}
        onChange={onChange}
      />
      (ISO date)
    </>
  );
};
