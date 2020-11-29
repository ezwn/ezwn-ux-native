import React from "react";

export const datetimeToTimeString = value => {
    const datetime = new Date(value + ".000Z");
    const message = datetime.toLocaleTimeString();
    return message;
}

export const TimeOutput = ({ value }) => {
    return <>{datetimeToTimeString(value)}</>;
}