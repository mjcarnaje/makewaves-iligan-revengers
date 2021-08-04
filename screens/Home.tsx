import React from "react";
import { StyleSheet, Text } from "react-native";

import InfoCard from "../components/InfoCard";
import Greetings from "../components/Greetings";
import Container from "../layout/Container";
import Separator from "../components/Separator";

export default function HomeScreen() {
  return (
    <Container style={styles.container}>
      <Greetings name="Tristan" />
      <Separator />
      <InfoCard />
      <Separator />
      <Text style={styles.title}>Home</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
