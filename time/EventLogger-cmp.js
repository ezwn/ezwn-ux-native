import React from "react";

import { HorizontalLayout } from "ezwn-ux-native/layouts/HorizontalLayout-cmp";
import { View } from "react-native";
import { TextButton } from "ezwn-ux-native/app-components/TextButton-cmp";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";

export const EventLogger = ({ name, onDone }) => {

  const log = () => {
    const time = new Date();
    onDone({ time });
  };

  return <HorizontalLayout>
    <View style={{ flex: 1 }}>
      <ListItem.Title>{name}</ListItem.Title>
    </View>
    <TextButton onPress={log}>
      Log
    </TextButton>
  </HorizontalLayout>
};
