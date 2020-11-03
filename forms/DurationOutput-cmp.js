import React from "react";

export const durationToString = duration => {
    const hours = Math.floor(duration / 3600);
    const mins = Math.floor(
        (duration - hours * 3600) / 60);
    const secs = Math.floor(duration - hours * 3600 - mins * 60);

    const message = (hours ? `${hours} hour(s)` : "")
        + (mins ? ` ${mins} min.` : "")
        + (secs ? ` ${secs} sec.` : "")

    return message.trim();
}

export const DurationOutput = ({ duration }) => {
    return <>{durationToString(duration)}</>;
}