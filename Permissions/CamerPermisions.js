import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

export default function CamerPermisions() {
  const requestCameraPermissions = async () => {
    const { granted } = ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("u nedd camera permissions");
    }
  };

  useEffect(() => {
    requestCameraPermissions();
  }, []);

  return (
    <View>
      <Text>CamerPermisions</Text>
    </View>
  );
}
