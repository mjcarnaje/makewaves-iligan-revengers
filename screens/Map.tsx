import React from "react";
import { StyleSheet } from "react-native";

import MapView from "react-native-maps";

import Layout from "../constants/Layout";
import Container from "../layout/Container";

export default function MapScreen() {
  return (
    <Container style={styles.container}>
      <MapView style={styles.map} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Layout.window.width,
    height: Layout.window.height,
  },
});
