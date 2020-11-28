import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";

const invariantStyleSheet = StyleSheet.create({
  appViewport: {
    flex: 1,
    height: Platform.OS === 'web' ? "100vh" : undefined
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
