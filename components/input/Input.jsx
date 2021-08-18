import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export const Input = ({ addItem, changeInput }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    addItem(input);
    setInput("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onSubmitEditing={handleSubmit}
        onChangeText={(text) => {
          setInput(text);
        }}
        value={input}
        placeholder="Add new hero"
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
