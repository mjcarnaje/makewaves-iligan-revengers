import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MapView from "react-native-maps";
import Color from "../../constants/Color";

const MiniMap = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Discover Nearby Pharmacies in your Area
        </Text>
        <Feather name="arrow-right" size={24} color={Color.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default MiniMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.secondary_light,
    borderRadius: 20,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: 154,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    width: "75%",
    color: Color.primary,
    fontFamily: "inter-bold",
    fontSize: 18,
  },
});
