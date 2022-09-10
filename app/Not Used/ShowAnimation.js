import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function ShowAnimation() {
  const [isAnimationOn, setIsAnimationOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimationOn(false);
    }, 3000);
  }, []);

  return isAnimationOn ? (
    <ActivityIndicator style={styles.container} size={"large"} color="red" />
  ) : (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>ShowAnimation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
});
