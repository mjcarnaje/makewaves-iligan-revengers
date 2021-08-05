import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import Color from "../../constants/Color";
import Separator from "../Separator";

export default function InfoCard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Feather name="star" size={20} color={Color.primary} />
        </View>
        <Text style={styles.title}>
          It seems like you are Out of Vitamin C Syrups!!
        </Text>
      </View>
      <Separator marginVertical={6} />
      <Text style={styles.description}>
        According to your recent activity,it seems like you are running out of
        Vitamin C syrups..Find a nearby pharmacy to buy one
      </Text>
      <Separator marginVertical={6} />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>FIND NEARBY PHARMACY</Text>
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
    fontFamily: "inter-bold",
    width: "90%",
    fontSize: 18,
  },
  description: {
    fontFamily: "inter-regular",
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
    fontFamily: "inter-bold",
    color: Color.primary,
  },
});
