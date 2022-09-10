import { View, Text, StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";
import CustomForm from "./CustomForm";
import CustomField from "./CustomField";
import CustomSubmitButton from "./CustomSubmitButton";
import Screen from "../components/Screen";
import { ErrorMessage } from "formik";
import CustomErrorMessage from "./CustomErrorMessage";

export default function RegisScreen() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  return (
    <Screen>
      <View>
        <CustomForm
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
        >
          <CustomField name="name" icon="account" placeholder="name" />
          <CustomField name="email" icon="email" placeholder="email" />
          <CustomField
            name="password"
            icon="account"
            placeholder="password"
            secureTextEntry
          />
          <CustomSubmitButton title="Register" />
        </CustomForm>
      </View>
    </Screen>
  );
}
