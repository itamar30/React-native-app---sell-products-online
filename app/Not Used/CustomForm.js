import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

export default function CustomForm({
  initialValues,
  validationSchema,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
