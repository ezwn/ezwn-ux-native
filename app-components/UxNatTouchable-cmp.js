import React from "react";
import { View, TouchableHighlight } from "react-native";

import { useHistory } from "react-router-native";

export const UxNatTouchable = ({
  children,
  onPress,
  routerPush,
  routerBack,
  styles,
  selectedStyle
}) => {
  const history = useHistory();

  const isCurrentRoute = history.location.pathname === routerPush;

  let action;
  if (routerBack) {
    action = () => history.goBack();
  } else if (routerPush && !isCurrentRoute) {
    action = () => history.push(routerPush);
  } else if (onPress) {
    action = onPress;
  } else {
    action = () => {};
  }

  return (
    <TouchableHighlight onPress={action}>
      <View style={isCurrentRoute ? [selectedStyle, ...styles] : styles}>
        {children}
      </View>
    </TouchableHighlight>
  );
};
