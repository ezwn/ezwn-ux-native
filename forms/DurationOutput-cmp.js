import React from "react";

export const durationToString = value => {
    if (value===0)
        return "0";

    const hours = Math.floor(value / 3600);
    const mins = Math.floor(
        (value - hours * 3600) / 60);
    const secs = Math.floor(value - hours * 3600 - mins * 60);

    const message = (hours ? `${hours} hour(s)` : "")
        + (mins ? ` ${mins} min.` : "")
        + (secs ? ` ${secs} sec.` : "")

    return message.trim();
}

export const DurationOutput = ({ value }) => {
    return <>{durationToString(value)}</>;
}