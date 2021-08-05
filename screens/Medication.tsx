import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Color from "../constants/Color";
import Layout from "../constants/Layout";
import Container from "../layout/Container";
import Tabs from "../components/tabs/Tabs";

export default function MedicationScreen() {
  return (
    <Container style={styles.container} isScrollable additionalPaddingTop={0}>
      <View style={styles.header}>
        <Header iconColor="gray" />
      </View>
      <View style={styles.content}>
        <View style={styles.tabContainer}>
          <Tabs data={[...Array(10).keys()]} />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    padding: 16,
    width: Layout.window.width,
    aspectRatio: 1,
    backgroundColor: Color.tertiary,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    height: 400,
    backgroundColor: Color.white,
    marginTop: -200,
    borderTopLeftRadius: 72,
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40,
    height: 80,
  },
});
