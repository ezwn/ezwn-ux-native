import React from "react";

export const datetimeToString = value => {
    const datetime = new Date(value + ".000Z");
    const message = datetime.toLocaleString();
    return message;
}

export const DatetimeOutput = ({ value }) => {
    return <>{datetimeToString(value)}</>;
}