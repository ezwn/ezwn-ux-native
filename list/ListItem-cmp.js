import React from "react";
import { Text, TouchableHighlight, View, StyleSheet } from "react-native";
import { useUxContext } from "ezwn-ux-native/UxContext";

const padding = 8;

const invariantStyleSheet = StyleSheet.create({
  ListItem: {
    paddingLeft: padding,
    paddingRight: padding,
    paddingTop: padding,
    paddingBottom: padding,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  }
});

const Title = ({ children }) => {
  const { styleSheet } = useUxContext();
  return <Text style={styleSheet.listItemTitle}>{children}</Text>;
};

const SubTitle = ({ children }) => {
  const { styleSheet } = useUxContext();
  return <Text style={styleSheet.listItemSubtitle}>{children}</Text>;
};


export const ListItem = ({ children, onPress }) => {

  const content = <View style={invariantStyleSheet.ListItem}>{children}</View>;

  return (
    onPress ? <TouchableHighlight onPress={onPress}>
        {content}
    </TouchableHighlight> : <>{content}</>
  );
};

ListItem.Title = Title;
ListItem.SubTitle = SubTitle;
