import React from "react";
import { TouchableHighlight, View } from "react-native";
import { Padded } from "../layouts/Padded-cmp";

export const Button = ({ children, onPress, enabled }) => (
  <TouchableHighlight onPress={enabled ? onPress : () => {}}>
    <View style={{ opacity: enabled ? 1.0 : 0.1 }}>
      <Padded>{children}</Padded>
    </View>
  </TouchableHighlight>
);

Button.defaultProps = {
  enabled: true
}
