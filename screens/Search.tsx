import React, { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";

import { RouteProp, useIsFocused } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import SearchCard from "../components/cards/SearchCard";
import Header from "../components/Header";
import SearchInput from "../components/inputs/SearchInput";
import Container from "../layout/Container";
import { RootStackParamList } from "../types";
import Separator from "../components/Separator";
import NotFound from "../components/NotFound";

interface Props {
  navigation: StackNavigationProp<RootStackParamList, "Drug">;
  route: RouteProp<RootStackParamList, "Drug">;
}

const SearchScreen: React.FC<Props> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [searchText, setSearchText] = useState("");
  const searchBarRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isFocused) {
      searchBarRef?.current?.focus();
    }
  }, [isFocused, searchBarRef]);

  return (
    <Container style={styles.container} additionalPaddingTop={0}>
      <Header iconColor="gray" />
      <SearchInput ref={searchBarRef} {...{ searchText, setSearchText }} />
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
