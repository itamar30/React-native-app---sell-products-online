import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MyForm() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().label(email),
    age: Yup.string().required().label(age),
  });
  const email = "email";
  const age = "age";

  return (
    <Formik
      initialValues={{ email: "", age: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({
        handleBlur,
        handleSubmit,
        handleChange,
        errors,
        setFieldTouched,
        touched,
      }) => (
        <>
          <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", width: "100%" }}>
              <TextInput
                style={styles.textInput}
                placeholder={email}
                onChangeText={handleChange(email)}
                onBlur={() => {
                  setFieldTouched(email);
                }}
              />
              <MaterialCommunityIcons
                size={30}
                name="email"
                style={{ marginRight: 40 }}
              />
            </View>

            {touched[email] && errors[email] ? (
              <Text style={styles.error}>{errors[email]}</Text>
            ) : null}

            <TextInput
              style={styles.textInput}
              placeholder={age}
              onChangeText={handleChange(age)}
              onBlur={() => {
                handleBlur(age);
                setFieldTouched(age);
              }}
            />

            {touched[age] && errors[age] ? (
              <Text style={styles.error}>{errors[age]}</Text>
            ) : null}
            <Button title="submit" onPress={handleSubmit} style={styles.btn} />
          </SafeAreaView>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
  },

  textInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 15,
    fontSize: 18,
    borderRadius: 25,
  },
  btn: {
    height: 20,
    width: "100%",
    backgroundColor: "pink",
    borderRadius: 25,
  },
  error: {
    color: "red",
    marginVertical: 5,
    fontSize: 17,
  },
});
