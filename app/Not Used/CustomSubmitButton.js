import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";
import { useFormikContext } from "formik";

export default function CustomSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableOpacity style={styles.container} onPress={handleSubmit}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
    textTransform: "capitalize",
  },
});
