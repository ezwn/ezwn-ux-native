import React from "react";
import { View, StyleSheet } from "react-native";

import { useUxContext } from "../UxContext";

import { BackTextIcon } from "../text-icons/BackTextIcon-cmp";
import { useHistory } from "react-router";
import { UxNatTouchable } from "./UxNatTouchable-cmp";

const invariantStyleSheet = StyleSheet.create({
  contextualMenu: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  contextualMenuChoice: {
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: "space-around"
  }
});

export const ContextualMenu = ({ children }) => {
  const {
    style: { styleSheet }
  } = useUxContext();

  return (
    <View
      style={[invariantStyleSheet.contextualMenu, styleSheet.contextualMenu]}
    >
      {children}
    </View>
  );
};

ContextualMenu.Choice = ({ children, onPress, routerPush, routerBack }) => {
  const {
    style: { styleSheet, contextualMenuIconColor }
  } = useUxContext();

  return (
    <UxNatTouchable
      onPress={onPress}
      routerPush={routerPush}
      routerBack={routerBack}
      styles={[
        invariantStyleSheet.contextualMenuChoice,
        styleSheet.contextualMenuChoice
      ]}
    >
      {React.cloneElement(children, {
        color: contextualMenuIconColor,
        textStyle: styleSheet.contextualMenuTextIconText
      })}
    </UxNatTouchable>
  );
};

ContextualMenu.BackChoice = () => {
  const history = useHistory();

  return (
    <ContextualMenu.Choice onPress={() => history.goBack()}>
      <BackTextIcon />
    </ContextualMenu.Choice>
  );
};
