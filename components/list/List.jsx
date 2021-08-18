import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { ListItem } from "../listitem/ListItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ClearButton } from "../clearbutton/ClearButton";
import { Input } from "../input/Input";
import { Random } from "../random/Random";

export const List = () => {
  const [list, setList] = useState([
    { id: 1, name: "pudge" },
    { id: 2, name: "huskar" },
    { id: 3, name: "riki" },
  ]);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("list");
        const parse = JSON.parse(value);
        parse && setList(parse);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const setData = async () => {
      try {
        await AsyncStorage.setItem("list", JSON.stringify(list));
      } catch (e) {
        console.log(e);
      }
    };
    setData();
  }, [list]);

  return (
    <View style={styles.app}>
      <Text style={styles.label}>Mid Chooser</Text>
      <Random list={list} />
      <Input
        style={styles.input}
        addItem={(input) => {
          setList([...list, { id: list.length + 1, name: input }]);
        }}
      />
      <FlatList
        style={styles.list}
        data={list}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            onDelete={() => {
              setList(list.filter((i) => i.id !== item.id));
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <ClearButton
        onPress={() => {
          AsyncStorage.clear();
          setList([]);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#343434",
    width: "100%",
    height: "100%",
  },
  list: {
    padding: 10,
  },
  label: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
