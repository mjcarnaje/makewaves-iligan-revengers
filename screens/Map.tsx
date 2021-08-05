import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import MapView from "react-native-maps";
import PharmacyCard from "../components/cards/PharmacyCard";
import Separator from "../components/Separator";

import Layout from "../constants/Layout";
import Container from "../layout/Container";

export default function MapScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <Container style={styles.container}>
      <MapView style={styles.map} />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={["30%", "50%", "95%"]}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <FlatList
            data={[...Array(10).keys()]}
            renderItem={() => <PharmacyCard />}
            keyExtractor={(item) => item.toString()}
            ItemSeparatorComponent={() => <Separator marginVertical={6} />}
          />
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
    paddingTop: 8,
    paddingHorizontal: 18,
  },
  map: {
    width: Layout.window.width,
    height: Layout.window.height,
  },
  title: {
    fontFamily: "inter-bold",
    fontSize: 22,
  },
});
