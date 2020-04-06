import React from "react";
import { TouchableHighlight, View } from "react-native";
import { Padded } from "../layouts/Padded-cmp";

export const ListItem = ({ children, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View>
        <Padded>{children}</Padded>
      </View>
    </TouchableHighlight>
  );
};
