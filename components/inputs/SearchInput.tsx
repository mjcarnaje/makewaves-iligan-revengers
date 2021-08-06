import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import Color from "../../constants/Color";
import { BottomTabParamList, RootStackParamList } from "../../types";

interface Props {
  navigation?: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, "Home">,
    StackNavigationProp<RootStackParamList>
  >;
  searchText?: string;
  setSearchText?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = React.forwardRef<TextInput, Props>(
  ({ navigation, searchText, setSearchText }, ref) => {
    if (navigation) {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          style={styles.inputContainer}
        >
          <Text style={styles.text}>What are you looking for?</Text>
          <Feather
            style={styles.icon}
            name="search"
            size={24}
            color={Color.gray}
          />
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.inputContainer}>
        <TextInput
          ref={ref}
          value={searchText}
          onChangeText={(text) => {
            if (setSearchText) setSearchText(text);
          }}
          placeholder="What are you looking for?"
          style={styles.input}
        />
        <Feather
          style={styles.icon}
          name="search"
          size={24}
          color={Color.gray}
        />
      </View>
    );
  }
);

export default SearchInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: 44,
    width: "100%",
    backgroundColor: Color.light_gray,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
  },
  text: {
    flex: 1,
    color: Color.gray,
  },
  icon: {},
});
