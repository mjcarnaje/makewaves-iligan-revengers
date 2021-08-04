import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import InfoCard from "../components/cards/InfoCard";
import Greetings from "../components/Greetings";
import Container from "../layout/Container";
import Separator from "../components/Separator";
import RecentlyViewedCard from "../components/cards/RecentlyViewedCard";
import ArticleCard from "../components/cards/ArticleCard";

import data from "../data/recently-viewed";

export default function HomeScreen() {
  return (
    <Container style={styles.container} isScrollable>
      <Greetings name="Tristan" />
      <Separator />
      <InfoCard />
      <Separator />
      <Text style={styles.title}>Recently Viewed</Text>
      <Separator />
      <View>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => <RecentlyViewedCard {...item} />}
          ItemSeparatorComponent={() => (
            <View style={{ marginHorizontal: 6 }} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <Separator />
      <Text style={styles.title}>Health Articles to Read</Text>
      <Separator />
      <View>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => <ArticleCard />}
          ItemSeparatorComponent={() => (
            <View style={{ marginHorizontal: 6 }} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <Separator />
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
