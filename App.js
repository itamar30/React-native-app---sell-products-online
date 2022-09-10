import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";

import React, { useEffect, useState } from "react";

import * as Permissions from "expo-permissions";
import CamerPermisions from "./Permissions/CamerPermisions";
import SelectImage from "./app/Not Used/SelectImage";

export default function App() {
  return <SelectImage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
