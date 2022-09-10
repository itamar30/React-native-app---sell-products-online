import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Apptext2({ children, fontSize = 80 }) {
  return (
    <View>
      <Text style={[styles.text, { fontSize }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
