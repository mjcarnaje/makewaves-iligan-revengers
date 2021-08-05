import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Color from "../../constants/Color";

interface Props {
  isSelected: boolean;
  onPress: () => void;
}

const Tab: React.FC<Props> = ({ onPress, isSelected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        !!isSelected && { backgroundColor: Color.secondary },
      ]}
    >
      <Text style={[styles.text, !!isSelected && { color: Color.primary }]}>
        Example
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: Color.offWhite,
  },
  text: {
    fontFamily: "inter-regular",
    color: Color.black,
  },
});
