import { View, Text, StyleSheet } from "react-native";
import React from "react";
export default function CustomErrorMessage({ error }) {
  return (
    <View>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 20,
  },
});
