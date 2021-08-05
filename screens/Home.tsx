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
import MiniMap from "../components/cards/MiniMap";
import SearchInput from "../components/inputs/SearchInput";
import { TouchableOpacity } from "react-native";

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
      <SearchInput {...{ navigation }} />
      <Separator marginVertical={14} />
      <View style={styles.row}>
        <Text style={styles.title}>Recently Viewed</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Medication")}>
          <Text style={styles.readMore}>Read more</Text>
        </TouchableOpacity>
      </View>
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
      <Separator />
      <Text style={styles.title}>Explore & Discover</Text>
      <Separator />
      <View>
        <MiniMap onPress={() => navigation.navigate("Map")} />
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
    fontFamily: "inter-bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  readMore: {
    fontSize: 12,
    fontFamily: "inter-medium",
  },
});
