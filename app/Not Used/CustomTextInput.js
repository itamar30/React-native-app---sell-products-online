import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function CustomTextInput({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={30}
          backgroundColor={colors.light}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    height: 50,
    width: "100%",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  textInput: {
    marginLeft: 15,
    fontSize: 20,
  },
  icon: {
    marginLeft: 15,
  },
});
