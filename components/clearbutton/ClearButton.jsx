import React from "react";
import { Button } from "react-native";

export const ClearButton = ({ onPress, style }) => {
  return (
    <Button onPress={onPress} style={style} title="Clear" color="#841584" />
  );
};
