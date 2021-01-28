import React from "react";
import { TouchableHighlight, View } from "react-native";

export const Button = ({ children, onPress, enabled, style }) => (
  <TouchableHighlight onPress={enabled ? onPress : () => {}}>
    <View style={[style, { opacity: enabled ? 1.0 : 0.1, padding: 12 }]}>
      {children}
    </View>
  </TouchableHighlight>
);

Button.defaultProps = {
  enabled: true,
  style: {}
}
