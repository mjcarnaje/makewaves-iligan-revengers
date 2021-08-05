import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import Color from "../../constants/Color";

const PharmacyCard = () => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.row, { flex: 1, marginBottom: 12 }]}
    >
      <View style={[styles.row, { flex: 0.85, paddingRight: 10 }]}>
        <FontAwesome5 name="hand-holding-heart" size={20} color={Color.red} />
        <View style={{ alignItems: "flex-start", width: "80%" }}>
          <Text style={styles.location} numberOfLines={2}>
            Mercury Drug Tubod, Iligan City Lanao del Norte
          </Text>
          <Text style={styles.status} numberOfLines={2}>
            Status: Available
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.15 }}>
        <Text style={styles.km}>1.2 KM</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PharmacyCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.offWhite,
    borderRadius: 12,
    padding: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  location: {
    fontFamily: "inter-medium",
  },
  status: {
    fontFamily: "inter-regular",
    color: Color.gray,
  },
  km: {
    fontFamily: "inter-medium",
  },
});
