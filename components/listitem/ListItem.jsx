import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemHero}>{props.name}</Text>
      <Button title="X" onPress={props.onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 1,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    backgroundColor: "#434343",
    borderRadius: 5,
    marginBottom: 5,
  },

  listItemHero: {
    fontSize: 20,
    color: "#f2f2f2",
  },
});
