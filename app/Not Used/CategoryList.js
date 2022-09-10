import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CategoryList({
  label,
  icon = "email",
  onPress,
  backgroundColor,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[{ backgroundColor: backgroundColor }, styles.touchableOpacity]}
      >
        <MaterialCommunityIcons name={icon} size={35} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "33%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  text: {
    alignSelf: "center",
  },
  icon: {
    alignSelf: "center",
  },
  touchableOpacity: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
