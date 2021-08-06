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
        <Header />
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" style={styles.image} source={example} />
        </View>
      </View>
      <Separator marginVertical={4} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Antibacterial Hand Gel</Text>
          <Text style={styles.type}>SANITIZER</Text>
        </View>
        <Separator marginVertical={4} />
        <View>
          <Text style={styles.descriptionLabel}>Description</Text>
          <Separator marginVertical={4} />
          <Text style={styles.description}>
            Vitamins are compounds that you must have for growth and health.
            They are needed in small amounts only and are usually available in
            the foods that you eat. Ascorbic acid, also known as vitamin C, is
            necessary for wound healing. It has orange flavor and some Citrus
            punch This Syrup is only for 5 - 10 yrs old an must be intaked once
            a day.
          </Text>
        </View>
        <Separator marginVertical={16} />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Map")}
            style={[styles.button, { backgroundColor: Color.primary }]}
          >
            <Text style={[styles.buttonText, { color: Color.white }]}>
              Find Nearby Availability
            </Text>
            <Feather name="map" size={24} color={Color.white} />
          </TouchableOpacity>
          <Separator marginVertical={6} />
          <TouchableOpacity
            onPress={() => navigation.navigate("Medication")}
            style={[styles.button, { backgroundColor: Color.secondary }]}
          >
            <Text style={[styles.buttonText, { color: Color.primary }]}>
              Add to Medication List
            </Text>
            <Feather name="arrow-right" size={24} color={Color.primary} />
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
    aspectRatio: 4 / 3.5,
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
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: "inter-bold",
    fontSize: 24,
    color: Color.text_secondary,
  },
  type: {
    fontFamily: "inter-bold",
    fontSize: 14,
    color: Color.text_secondary,
  },
  descriptionLabel: {
    fontFamily: "inter-bold",
    fontSize: 18,
    color: Color.text_secondary,
  },
  description: {
    fontFamily: "inter-medium",
    fontSize: 15,
    color: Color.text_secondary,
  },
  button: {
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontFamily: "inter-bold",
    fontSize: 14,
  },
});
