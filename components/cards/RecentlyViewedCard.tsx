import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { example } from "../../assets";
import Color from "../../constants/Color";
import Layout from "../../constants/Layout";
import { commaFormat } from "../../utils";
import Separator from "../Separator";

interface Props {
  name: string;
  type: string;
  onPress: () => void;
}

const RecentlyViewedCard: React.FC<Props> = ({ name, type, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" style={styles.image} source={example} />
      </View>
      <Separator marginVertical={2} />
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.type} numberOfLines={1}>
        {type}
      </Text>
    </TouchableOpacity>
  );
};

export default RecentlyViewedCard;

const styles = StyleSheet.create({
  container: {
    maxWidth: Layout.window.width / 3 - 24,
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
  name: {
    fontFamily: "inter-bold",
    fontSize: 13,
  },
  type: {
    fontFamily: "inter-medium",
    fontSize: 12,
  },
});
