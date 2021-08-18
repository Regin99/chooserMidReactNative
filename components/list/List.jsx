import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
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
    <View style={styles.list}>
      <Input
        addItem={(input) => {
          setList([...list, { id: list.length + 1, name: input }]);
        }}
      />
      {list.map((item, index) => (
        <ListItem
          key={index}
          name={item.name}
          onDelete={() => {
            setList(list.filter((i) => i.id !== item.id));
          }}
        />
      ))}

      <ClearButton
        onPress={() => {
          AsyncStorage.clear();
          setList([]);
        }}
      />
      <Random list={list} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});
