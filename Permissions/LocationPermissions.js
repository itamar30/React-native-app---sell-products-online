import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Location from "expo-location";

export default function LocationPermissions() {
  const requestLocatopnPermissions = async () => {
    const { granted } = Location.requestForegroundPermissionsAsync();
    if (!granted) {
      alert("u nedd Location permissions");
    }
  };

  useEffect(() => {
    requestLocatopnPermissions();
  }, []);

  return (
    <View>
      <Text>LocationPermissions</Text>
    </View>
  );
}
