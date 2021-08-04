import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { firstArticle } from "../../assets";
import Color from "../../constants/Color";
import Layout from "../../constants/Layout";
import Separator from "../Separator";

const ArticleCard = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.coverPhotoContainer}>
        <Image source={firstArticle} style={styles.coverPhoto} />
      </View> */}
      <Text style={styles.date}>AUGUST 3, 2021</Text>
      <Separator marginVertical={2} />
      <Text style={styles.title}>WHY EXCERCISE IS IMPORTANT ?</Text>
      <Separator marginVertical={2} />
      <Text style={styles.description}>
        Physical activity or exercise can improve your health and reduce the
        risk of developing several diseases like type 2 diabetes, cancer and
        cardiovascular disea...
      </Text>
      <Separator marginVertical={2} />
      <View style={styles.footer}>
        <View style={styles.authorContainer}>
          <Text style={styles.authorName}>SOME AUTHOR</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Read more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  container: {
    maxWidth: Layout.window.width / 2 + 16,
  },
  coverPhotoContainer: {
    backgroundColor: Color.primary,
    height: Layout.window.height / 2,
    width: "100%",
  },
  coverPhoto: {
    flex: 1,
  },
  date: {
    fontFamily: "inter-600",
  },
  title: {
    fontFamily: "inter-700",
  },
  description: {
    fontFamily: "inter-400",
  },
  footer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  authorContainer: {},
  authorImage: {},
  authorName: {
    fontFamily: "inter-600",
    color: Color.primary,
    fontSize: 12,
  },
  buttonContainer: {},
  buttonText: {
    fontFamily: "inter-400",
    color: Color.primary,
    fontSize: 11,
  },
});
