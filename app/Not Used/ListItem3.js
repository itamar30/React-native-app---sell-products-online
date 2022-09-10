import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItem3({ title, onPress, onPress1 }) {
  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <Swipeable
          renderRightActions={() => (
            <TouchableOpacity onPress={onPress}>
              <MaterialCommunityIcons name="trash-can" size={35} />
            </TouchableOpacity>
          )}
          renderLeftActions={() => (
            <TouchableOpacity onPress={onPress1}>
              <MaterialCommunityIcons
                name="email"
                size={35}
                style={{ marginRight: 50 }}
              />
            </TouchableOpacity>
          )}
        >
          <Text style={styles.text}>{title}</Text>
        </Swipeable>
      </GestureHandlerRootView>
      <MaterialCommunityIcons name="chevron-left" size={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 70,
    borderWidth: 2,
    borderColor: "black",
  },
  text: {
    fontSize: 25,
    width: 300,
  },
});
