import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { firstArticle, winterAvatar } from "../../assets";
import Color from "../../constants/Color";
import Layout from "../../constants/Layout";
import Separator from "../Separator";

const ArticleCard = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={firstArticle}
        style={styles.coverPhoto}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.date}>AUGUST 3, 2021</Text>
        <Separator marginVertical={3} />
        <Text style={styles.title}>WHY EXCERCISE IS IMPORTANT ?</Text>
        <Separator marginVertical={3} />
        <Text style={styles.description} numberOfLines={5}>
          Physical activity or exercise can improve your health and reduce the
          risk of developing several diseases like type 2 diabetes, cancer and
          cardiovascular disea...
        </Text>
        <Separator marginVertical={3} />
        <View style={styles.footer}>
          <View style={styles.authorContainer}>
            <Image
              resizeMode="cover"
              source={winterAvatar}
              style={styles.authorImage}
            />
            <Text style={styles.authorName}>Winter Aespa</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Read more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  container: {
    maxWidth: Layout.window.width / 2 + 36,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: Color.offWhite,
  },
  coverPhotoContainer: {
    backgroundColor: Color.primary,
    height: Layout.window.height / 2,
  },
  coverPhoto: {
    width: "100%",
    height: 110,
  },
  contentContainer: {
    padding: 12,
  },
  date: {
    fontFamily: "inter-600",
    fontSize: 11,
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
    alignItems: "center",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorImage: {
    height: 28,
    width: 28,
    borderRadius: 14,
    marginRight: 4,
  },
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
