import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import SearchCard from "../components/cards/SearchCard";
import Header from "../components/Header";
import SearchInput from "../components/inputs/SearchInput";
import Container from "../layout/Container";
import { RootStackParamList } from "../types";
import Separator from "../components/Separator";
import NotFound from "../components/cards/NotFound";

interface Props {
  navigation: StackNavigationProp<RootStackParamList, "Drug">;
  route: RouteProp<RootStackParamList, "Drug">;
}

const SearchScreen: React.FC<Props> = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <Container style={styles.container} additionalPaddingTop={0}>
      <Header iconColor="gray" />
      <SearchInput {...{ searchText, setSearchText }} />
      <Separator />
      {!!(searchText !== "") && (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={searchText.length > 4 ? [] : [...Array(5).keys()]}
          keyExtractor={(item) => item.toString()}
          renderItem={(item) => (
            <SearchCard onPress={() => navigation.navigate("Drug")} />
          )}
          ItemSeparatorComponent={() => <Separator marginVertical={6} />}
          ListEmptyComponent={<NotFound />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
