import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text styles={styles.listItemHero}>{props.name}</Text>
      <Button title="X" onPress={props.onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  listItemHero: {
    marginRight: "50px",
  },
});
