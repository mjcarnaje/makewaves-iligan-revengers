import React, { useCallback, useRef } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useFocusEffect } from "@react-navigation/native";
import MapView from "react-native-maps";

import PharmacyCard from "../components/cards/PharmacyCard";
import Separator from "../components/Separator";
import Container from "../layout/Container";

export default function MapScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setHidden(true);
      return () => StatusBar.setHidden(false, "none");
    }, [])
  );

  return (
    <Container style={styles.container} offInsetTop additionalPaddingTop={0}>
      <MapView style={styles.map} />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={["30%", "50%", "90%"]}
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
    ...StyleSheet.absoluteFillObject,
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
