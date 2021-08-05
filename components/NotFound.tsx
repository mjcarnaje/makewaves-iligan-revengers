import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { notFound } from "../assets";

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" style={styles.image} source={notFound} />
      <Text style={styles.text}>No Medicine Found.</Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "75%",
    height: 200,
  },
  text: {
    marginTop: 12,
    fontFamily: "inter-medium",
    fontSize: 18,
  },
});
