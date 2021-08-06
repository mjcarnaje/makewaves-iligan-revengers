import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import Color from "../../constants/Color";

const PharmacyCard = () => {
  return (
    <TouchableOpacity style={[styles.container, styles.row]}>
      <View style={[styles.row, { width: "70%" }]}>
        <FontAwesome5 name="hand-holding-heart" size={22} color={Color.red} />
        <View style={styles.locationWrapper}>
          <Text style={styles.location} numberOfLines={2}>
            Mercury Drug Tubod, Iligan City Lanao del Norte
          </Text>
          <Text style={styles.status} numberOfLines={2}>
            Status: Available
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 6 }} />
      <View style={styles.kmWrapper}>
        <Text style={styles.km}>1.2 KM</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PharmacyCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: Color.offWhite,
    padding: 18,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationWrapper: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 12,
  },
  location: {
    fontFamily: "inter-medium",
    fontSize: 14,
  },
  status: {
    fontFamily: "inter-regular",
    fontSize: 13,
    color: Color.gray,
  },
  kmWrapper: {
    width: "30%",
    alignItems: "center",
  },
  km: {
    fontFamily: "inter-medium",
  },
});
