import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const Random = ({ list }) => {
  const [random, setRandom] = useState("Random");
  const url = `https://www.random.org/integers/?num=1&min=1&max=${list.length}&col=1&base=10&format=plain&rnd=new`;

  const getRandom = () => {
    list.length > 0
      ? fetch(url)
          .then((response) => response.text())
          .then((response) => {
            setRandom(list[response - 1].name);
          })
          .catch((error) => {
            console.error(error);
          })
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
