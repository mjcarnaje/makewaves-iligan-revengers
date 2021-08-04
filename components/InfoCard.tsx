import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import Color from "../constants/Color";
import Separator from "./Separator";

export default function InfoCard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Feather name="star" size={20} color={Color.primary} />
        </View>
        <Text style={styles.title}>Lorem ipsum dolor sit..</Text>
      </View>
      <Separator marginVertical={6} />
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis
        sapien ut justo rutrum, eget interdum felis imperdiet.
      </Text>
      <Separator marginVertical={6} />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Lorem ipsum dolor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: Color.secondary,
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    borderRadius: 20,
    height: 36,
    width: 36,
    marginRight: 10,
  },
  title: {
    fontFamily: "inter-700",
    textTransform: "uppercase",
    fontSize: 18,
  },
  description: {
    fontFamily: "inter-400",
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    borderRadius: 8,
    backgroundColor: Color.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "inter-700",
    color: Color.primary,
  },
});
