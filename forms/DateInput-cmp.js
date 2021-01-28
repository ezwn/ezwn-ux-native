import React, { useEffect, useState } from "react";
import { NumberInput } from "./NumberInput-cmp";

const twoDigits = number => number<10 ? "0" + number : "" + number;

export const DateInput = ({ value, onChange,  onValidityChange }) => {

  const [initYear, initMonth, initDate] = value.split("-");

  const [year, setYear] = useState(parseInt(initYear));
  const [month, setMonth] = useState(parseInt(initMonth));
  const [day, setDay] = useState(parseInt(initDate));

  useEffect(() => {
    const date = `${year}-${twoDigits(month)}-${twoDigits(day)}`;
    onChange(date);
  }, [year, month, day]);

  return (
    <>
      <NumberInput value={year} onChange={setYear} vertical={true} width={45} min={2000} max={2021} />
      <NumberInput value={month} onChange={setMonth} vertical={true} width={27} min={1} max={12} />
      <NumberInput value={day} onChange={setDay} vertical={true} width={27} min={1} max={31} />
    </>
  );
};
