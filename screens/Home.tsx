import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";

import Greetings from "../components/Greetings";
import Container from "../layout/Container";
import Separator from "../components/Separator";
import RecentlyViewedCard from "../components/cards/RecentlyViewedCard";

import data from "../data/recently-viewed";
import { BottomTabParamList, RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, "Home">,
    StackNavigationProp<RootStackParamList>
  >;
  route: RouteProp<BottomTabParamList, "Home">;
}

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <Container style={styles.container} isScrollable>
      <Greetings name="Tristan" />
      <Separator />
      <Text style={styles.title}>Recently Viewed</Text>
      <Separator />
      <View>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => (
            <RecentlyViewedCard
              {...item}
              onPress={() => navigation.navigate("Drug")}
            />
          )}
          ItemSeparatorComponent={() => (
            <View style={{ marginHorizontal: 6 }} />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
