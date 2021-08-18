import React from "react";
import { Button } from "react-native";

export const ClearButton = ({ onPress }) => {
  return <Button onPress={onPress} title="Clear" color="#841584" />;
};
