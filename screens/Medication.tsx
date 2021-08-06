import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import SearchCard from "../components/cards/SearchCard";

import Header from "../components/Header";
import Separator from "../components/Separator";
import Color from "../constants/Color";
import Layout from "../constants/Layout";
import Container from "../layout/Container";
import AddButton from "../components/buttons/AddButton";

export default function MedicationScreen() {
  return (
    <Container style={styles.container} isScrollable additionalPaddingTop={0}>
      <View style={styles.header}>
        <Header iconColor="white" />
        <Text style={styles.title}>Medications</Text>
      </View>
      <View style={styles.content}>
        <AddButton style={styles.addButton} />
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={[...Array(5).keys()]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <SearchCard />}
          ItemSeparatorComponent={() => <Separator marginVertical={8} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    padding: 16,
    width: Layout.window.width,
    height: Layout.window.height / 4 + 80,
    backgroundColor: Color.primary_light,
  },
  title: {
    fontSize: 34,
    fontFamily: "inter-bold",
    color: Color.white,
    position: "absolute",
    bottom: 80 + 10,
    left: 72 - 24,
  },
  content: {
    paddingHorizontal: 28,
    flex: 1,
    minHeight: Layout.window.height - Layout.window.height / 4,
    marginTop: -80,
    paddingTop: 72 - 18,
    backgroundColor: Color.white,
    borderTopLeftRadius: 72,
  },
  addButton: {
    position: "absolute",
    right: 14 + 10,
    top: -24,
  },
});
