import React from "react";
import { StyleSheet, Text } from "react-native";

import Container from "../layout/Container";

export default function MedicationScreen() {
  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Medication</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
