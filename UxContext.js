import React, { useContext } from "react";
import { StyleSheet } from "react-native";

const fullBgColor = "#008700";
const fullAltBgColor = "#000000";
const inkColor = "#ffffff";
const inkAltColor = "#000000";

const UxContext = React.createContext({
  style: {
    titleBarButtonIconColor: `${inkColor}E0`,
    navigationMenuIconColor: `${inkAltColor}C0`,
    contextualMenuIconColor: `${inkColor}E0`,
    styleSheet: StyleSheet.create({
      // VerticalBorderLayout
      verticalBorderLayout: {
        backgroundColor: "#fff"
      },

      // TitleBar
      titleBar: {
        backgroundColor: `${fullBgColor}D7`
      },
      titleBarText: {
        color: `${inkColor}E0`,
        fontWeight: "bold"
      },
      titleBarTextIconText: {
        display: "none"
      },

      // NavigationMenu
      navigationMenu: {
        backgroundColor: `${fullAltBgColor}17`,
        borderTopWidth: 1,
        borderTopColor: `${fullAltBgColor}20`
      },
      navigationMenuTextIconText: {
        color: `${inkAltColor}C0`,
        fontSize: 11
      },
      navigationMenuChoice_selected: {
        backgroundColor: `${fullBgColor}27`
      },

      // ContextualMenu
      contextualMenu: {},
      contextualMenuChoice: {
        backgroundColor: `${fullBgColor}FF`,
        margin: 12,
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 7
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14
      },
      contextualMenuTextIconText: {
        display: "none"
      },

      // ListItem
      listItemTitle: {
        fontSize: 16
      },
      listItemSubtitle: {
        color: "grey"
      },

      // Button
      button: {
        backgroundColor: `${fullBgColor}D7`
      },
      buttonText: {
        color: `${inkColor}E0`,
        fontWeight: "bold"
      },
    })
  }
});

export const useUxContext = () => useContext(UxContext);
