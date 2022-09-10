import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import CustomTextInput from "./CustomTextInput";
import CustomErrorMessage from "./CustomErrorMessage";
import ErrorMessage from "../components/forms/ErrorMessage";

export default function CustomField({ name, ...otherProps }) {
  const { handleBlur, handleChange, setFieldTouched } = useFormikContext();
  const { errors, touched } = useFormikContext();
  return (
    <>
      <CustomTextInput
        onBlur={() => {
          handleBlur(name);
          setFieldTouched(name);
        }}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <CustomErrorMessage error={errors[name]} />
    </>
  );
}
