import React, { useEffect, useRef, useState } from "react";

import { HorizontalLayout } from "ezwn-ux-native/layouts/HorizontalLayout-cmp";
import { Text, View } from "react-native";
import { TextButton } from "ezwn-ux-native/app-components/TextButton-cmp";
import { DurationOutput } from "ezwn-ux-native/forms/DurationOutput-cmp";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";
import { useStorage } from "ezwn-storage-native/JSONAsyncStorage";

export const Timer = ({ name, onDone }) => {
  const [startTime, setStartTime] = useStorage(
    `timer-${name}`,
    () => null
  );

  const [duration, setDuration] = useState(null);

  const interval = useRef(null);

  useEffect(() => {
    if (startTime && !interval.current) {
      interval.current = setInterval(updateTime(startTime), 250);
    }

    return () => clearInterval(interval.current);
  }, [startTime, interval]);

  const updateTime = startTime => () => {
    const endTime = new Date();
    const dur = Math.round((endTime - startTime) / 1000.0);
    setDuration(dur);
  }

  const start = () => {
    const startTime = new Date();
    setStartTime(startTime.getTime());
  };

  const stop = () => {
    if (!startTime) {
      return;
    }

    clearInterval(interval.current);
    interval.current = null;

    const endTime = new Date();
    const duration = Math.round((endTime - new Date(startTime)) / 1000.0);

    onDone({ startTime: new Date(startTime), endTime, duration });

    setStartTime(null);
    setDuration(null);
  };

  return <HorizontalLayout>
    <View style={{ flex: 1 }}>
      <ListItem.Title>{name}</ListItem.Title>
      <ListItem.SubTitle><DurationOutput value={duration} /></ListItem.SubTitle>
    </View>
    {
      !startTime
        ? <TextButton onPress={start}>
          Start
        </TextButton>
        : <TextButton onPress={stop} alt={true}>
          Stop
        </TextButton>
    }
  </HorizontalLayout>
};
