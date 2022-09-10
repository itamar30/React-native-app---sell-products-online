import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import Icon from "../components/Icon";

export default function ListItem4({ title, subtitle, image, onPress }) {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => (
          <TouchableOpacity onPress={onPress}>
            <Icon
              name="trash-can"
              size={35}
              style={{ marginHorizontal: 20, alinSelf: "center" }}
            />
          </TouchableOpacity>
        )}
        renderLeftActions={() => (
          <TouchableOpacity onPress={onPress}>
            <Icon name="plus" size={35} style={{ marginHorizontal: 20 }} />
          </TouchableOpacity>
        )}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={image}></Image>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.titsubtitlele}>{subtitle}</Text>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 300,
    padding: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  subtitle: {
    fontSize: 15,
  },
  detailsContainer: {
    marginHorizontal: 20,
  },
});
