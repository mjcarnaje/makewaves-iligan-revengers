import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import MapView from "react-native-maps";
import PharmacyCard from "../components/cards/PharmacyCard";
import Separator from "../components/Separator";
import Color from "../constants/Color";

import Layout from "../constants/Layout";
import Container from "../layout/Container";

export default function MapScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <Container style={styles.container} additionalPaddingTop={0}>
      <MapView style={styles.map} />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={["30%", "50%", "95%"]}
        backgroundComponent={({ style }) => (
          <View style={[styles.customModal, style]} />
        )}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Pharmacy Nearby</Text>
          <Separator marginVertical={4} />
          {[...Array(10).keys()].map((item) => (
            <PharmacyCard key={item} />
          ))}
        </BottomSheetScrollView>
      </BottomSheet>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  map: {
    width: Layout.window.width,
    height: Layout.window.height,
  },
  title: {
    fontFamily: "inter-bold",
    fontSize: 26,
    marginBottom: 16,
  },
  customModal: {
    backgroundColor: "white",
    borderRadius: 28,
  },
});
