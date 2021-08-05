import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";

import Color from "../constants/Color";
import Header from "../components/Header";
import Layout from "../constants/Layout";
import Container from "../layout/Container";
import { example } from "../assets";
import Separator from "../components/Separator";
import { BottomTabParamList, RootStackParamList } from "../types";

interface Props {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<RootStackParamList, "Drug">,
    StackNavigationProp<BottomTabParamList>
  >;
  route: RouteProp<RootStackParamList, "Drug">;
}

const Drug: React.FC<Props> = ({ navigation, route }) => {
  return (
    <Container style={styles.container} isScrollable additionalPaddingTop={0}>
      <View style={styles.header}>
        <Header iconColor="gray" />
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" style={styles.image} source={example} />
        </View>
      </View>
      <Separator marginVertical={8} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>BRAND X VITAMIN C</Text>
          <Text style={styles.type}>SYRUP</Text>
        </View>
        <Separator marginVertical={4} />
        <View>
          <Text style={styles.descriptionLabel}>Description</Text>
          <Text style={styles.description}>
            Vitamins are compounds that you must have for growth and health.
            They are needed in small amounts only and are usually available in
            the foods that you eat. Ascorbic acid, also known as vitamin C, is
            necessary for wound healing. It has orange flavor and some Citrus
            punch This Syrup is only for 5 - 10 yrs old an must be intaked once
            a day.
          </Text>
        </View>
        <Separator marginVertical={8} />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Map")}
            style={[styles.button, { backgroundColor: Color.primary }]}
          >
            <Text style={[styles.buttonText, { color: Color.white }]}>
              Find Nearby Availability
            </Text>
            <Feather name="map" size={18} color={Color.white} />
          </TouchableOpacity>
          <Separator marginVertical={4} />
          <TouchableOpacity
            onPress={() => navigation.navigate("Medication")}
            style={[styles.button, { backgroundColor: Color.secondary }]}
          >
            <Text style={[styles.buttonText, { color: Color.primary }]}>
              Add to Medication List
            </Text>
            <Feather name="arrow-right" size={18} color={Color.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Drug;

const styles = StyleSheet.create({
  container: {},
  header: {
    padding: 16,
    width: Layout.window.width,
    aspectRatio: 1,
    backgroundColor: Color.secondary,
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "45%",
    height: undefined,
    aspectRatio: 1,
  },
  content: {
    padding: 12,
  },
  title: {
    fontFamily: "inter-bold",
    fontSize: 28,
  },
  type: {
    fontFamily: "inter-bold",
  },
  descriptionLabel: {
    fontFamily: "inter-bold",
    fontSize: 18,
  },
  description: {
    fontFamily: "inter-medium",
  },
  button: {
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  buttonText: {
    fontFamily: "inter-bold",
  },
});
