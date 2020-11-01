import React from "react";
import { View, StyleSheet } from "react-native";

import { useUxContext } from "../UxContext";
import { UxNatTouchable } from "./UxNatTouchable-cmp";

const invariantStyleSheet = StyleSheet.create({
  navigationMenu: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navigationMenuChoice: {
    padding: 7,
    paddingTop: 11
  }
});

export const NavigationMenu = ({ children }) => {
  const {
    styleSheet
  } = useUxContext();

  return (
    <View
      style={[invariantStyleSheet.navigationMenu, styleSheet.navigationMenu]}
    >
      {children}
    </View>
  );
};

NavigationMenu.Choice = ({ children, onPress, routerPush, routerBack }) => {
  const {
    styleSheet, navigationMenuIconColor
  } = useUxContext();

  return (
    <UxNatTouchable
      onPress={onPress}
      routerPush={routerPush}
      routerBack={routerBack}
      styles={[invariantStyleSheet.navigationMenuChoice]}
      selectedStyle={styleSheet.navigationMenuChoice_selected}
    >
      {React.cloneElement(children, {
        color: navigationMenuIconColor,
        textStyle: styleSheet.navigationMenuTextIconText
      })}
    </UxNatTouchable>
  );
};
