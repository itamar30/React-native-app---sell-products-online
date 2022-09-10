import { View, Text } from "react-native";
import React from "react";

export default function LongText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
}
