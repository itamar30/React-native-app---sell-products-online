import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FlatList } from "react-native-gesture-handler";

export default function SelectImage() {
  const [imageUri, setImageUri] = useState();

  
  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={selectImage} />
      <TouchableOpacity onPress={() => setImageUri(null)}>
        <Image source={{ uri: imageUri }} style={{ height: 200, width: 200 }} />
      </TouchableOpacity>
    </View>
  );
}
