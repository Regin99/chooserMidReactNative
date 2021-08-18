import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const Random = ({ list }) => {
  const [random, setRandom] = useState("Random");

  const getRandom = () => {
    list.length > 0
      ? setRandom(list[Math.floor(Math.random() * list.length)].name)
      : setRandom("No data");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.zagl}>РУССКАЯ ЗАГЛУШКА)</Text>
      <Text style={styles.label}>{random}</Text>
      <Button title="Random" onPress={getRandom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  label: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#841584",
    textAlign: "center",
  },
  zagl: {
    fontSize: 7,
    color: "#343434",
  },
  button: {
    padding: 20,
  },
});
