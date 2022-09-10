import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function PersonList({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.fontSize}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    // fontSize: 16,
  },
});
