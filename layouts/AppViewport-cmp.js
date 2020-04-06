import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

const invariantStyleSheet = StyleSheet.create({
  appViewport: {
    flex: 1
  }
});

export const AppViewport = ({ children }) => {
  return (
    <SafeAreaView style={invariantStyleSheet.appViewport}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};
