import React from "react";
import { View, StyleSheet } from "react-native";

import { useUxContext } from "../UxContext";
import { UxNatTouchable } from "./UxNatTouchable-cmp";

const invariantStyleSheet = StyleSheet.create({
  tabMenu: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tabMenuChoice: {
    padding: 7,
    paddingTop: 11
  }
});

export const TabMenu = ({ children }) => {
  const {
    styleSheet
  } = useUxContext();

  return (
    <View
      style={[invariantStyleSheet.tabMenu, styleSheet.tabMenu]}
    >
      {children}
    </View>
  );
};

TabMenu.Choice = ({ children, onPress, routerPush, routerBack }) => {
  const {
    styleSheet, tabMenuIconColor
  } = useUxContext();

  return (
    <UxNatTouchable
      onPress={onPress}
      routerPush={routerPush}
      routerBack={routerBack}
      styles={[invariantStyleSheet.tabMenuChoice]}
      selectedStyle={styleSheet.tabMenuChoice_selected}
    >
      {React.cloneElement(children, {
        color: tabMenuIconColor,
        textStyle: styleSheet.tabMenuTextIconText
      })}
    </UxNatTouchable>
  );
};
