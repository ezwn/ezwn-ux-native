import React from "react";
import { Text } from "react-native";

export const datetimeToString = value => {
    const datetime = new Date(value + ".000Z");
    const message = datetime.toLocaleString();
    return message;
}

export const DatetimeOutput = ({ value }) => {
    return <Text>{datetimeToString(value)}</Text>;
}