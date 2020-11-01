import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useHistory } from "react-router";

import { useUxContext } from "../UxContext";
import { BackTextIcon } from "../text-icons/BackTextIcon-cmp";
import { SettingsTextIcon } from "ezwn-ux-native/text-icons/SettingsTextIcon-cmp";

const invariantStyleSheet = StyleSheet.create({
  titleBar: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 7,
    paddingRight: 7
  },
  titleBarLeft: {
    marginLeft: 4,
    marginRight: 27
  },
  titleBarRight: {
    marginLeft: 27,
    marginRight: 4
  },
  titleBarText: {
    fontSize: 18,
    flex: 1
  }
});

export const TitleBar = ({ text, left, right }) => {
  const {
    styleSheet
  } = useUxContext();

  return (
    <View style={[invariantStyleSheet.titleBar, styleSheet.titleBar]}>
      {left && <View style={invariantStyleSheet.titleBarLeft}>{left}</View>}
      <Text style={[invariantStyleSheet.titleBarText, styleSheet.titleBarText]}>
        {text}
      </Text>
      {right && <View style={invariantStyleSheet.titleBarRight}>{right}</View>}
    </View>
  );
};

TitleBar.Button = ({ children, onPress }) => {
  const {
    styleSheet, titleBarButtonIconColor
  } = useUxContext();

  return (
    <TouchableHighlight onPress={onPress}>
      <View>
        {React.cloneElement(children, {
          color: titleBarButtonIconColor,
          textStyle: styleSheet.titleBarTextIconText
        })}
      </View>
    </TouchableHighlight>
  );
};

TitleBar.BackButton = () => {
  const history = useHistory();

  return (
    <TitleBar.Button onPress={() => history.goBack()}>
      <BackTextIcon />
    </TitleBar.Button>
  );
};

TitleBar.SettingsButton = () => {
  const history = useHistory();

  return (
    <TitleBar.Button onPress={() => history.push("/settings")}>
      <SettingsTextIcon />
    </TitleBar.Button>
  );
};
