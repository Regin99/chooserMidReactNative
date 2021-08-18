import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Animated } from "react-native";

export const Input = ({ addItem }) => {
  const [input, setInput] = useState("");

  const transitionAnim = useRef(new Animated.Value(0)).current;

  const transitionIn = () =>
    Animated.timing(transitionAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();

  const transitionOut = () =>
    Animated.timing(transitionAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

  const handleSubmit = () => {
    addItem(input);
    setInput("");
  };

  const [styleArr, setStyleArr] = useState([styles.inputContainer]);

  const translate = StyleSheet.create({
    anim: {
      transform: [
        {
          translateY: transitionAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "210%"],
          }),
        },
      ],
      backgroundColor: "#343434",
    },
  });

  return (
    <Animated.View style={[styleArr]}>
      <TextInput
        style={styles.textInput}
        onSubmitEditing={handleSubmit}
        onChangeText={(text) => {
          setInput(text);
        }}
        value={input}
        placeholder="Add new hero"
        placeholderTextColor="#f2f2f2"
        autoCorrect={false}
        onFocus={() => {
          transitionIn();
          setStyleArr([
            ...styleArr,
            styles.inputContainerFocus,
            translate.anim,
          ]);
        }}
        keyboardAppearance="dark"
        onBlur={() => {
          transitionOut();
          setStyleArr([styles.inputContainer, translate.anim]);
        }}
      />
      <Button title="Add" onPress={handleSubmit} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 1,
  },
  textInput: {
    fontSize: 20,
    width: "88%",
    color: "#f2f2f2",
  },
  inputContainerFocus: {
    backgroundColor: "#434343",
    height: "10%",
    alignItems: "center",
    zIndex: 1,
    borderTopWidth: 2,
    borderTopColor: "#006ee6",
  },
});
