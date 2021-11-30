import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { List } from "./components/list/List.jsx";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <List />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
