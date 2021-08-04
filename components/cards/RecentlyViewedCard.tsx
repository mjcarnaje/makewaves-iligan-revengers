import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";
import { example } from "../../assets";
import Color from "../../constants/Color";
import Layout from "../../constants/Layout";
import { commaFormat } from "../../utils";

interface Props {
  name: string;
  type: string;
}

const RecentlyViewedCard: React.FC<Props> = ({ name, type }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={example} />
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.type} numberOfLines={1}>
        {type}
      </Text>
    </View>
  );
};

export default RecentlyViewedCard;

const styles = StyleSheet.create({
  container: {
    maxWidth: Layout.window.width / 3 - 20,
  },
  imageContainer: {
    padding: 32,
    backgroundColor: Color.secondary,
    borderRadius: 16,
  },
  image: {
    height: 44,
    width: 44,
  },
  name: {
    fontFamily: "inter-700",
    fontSize: 13,
  },
  type: {
    fontFamily: "inter-500",
    fontSize: 12,
  },
});
