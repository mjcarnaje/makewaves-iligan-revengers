import React from "react";
import { Image, View } from "react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { example } from "../../assets";
import Color from "../../constants/Color";
import Layout from "../../constants/Layout";

interface Props {
  onPress?: () => void;
}

const SearchCard: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" style={styles.image} source={example} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, hic?
        </Text>
        <Text style={styles.description} numberOfLines={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, hic?
          Necessitatibus sunt dicta illo corrupti ipsam dolorem fugiat, nam,
          quod blanditiis nulla unde eum nostrum consequatur quos vel neque
          ullam.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  imageContainer: {
    width: Layout.window.width / 3 - 24,
    height: Layout.window.width / 3 - 24,
    backgroundColor: Color.secondary,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "75%",
    height: undefined,
    aspectRatio: 1,
  },
  details: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: "inter-bold",
  },
  description: {
    fontFamily: "inter-medium",
  },
});
