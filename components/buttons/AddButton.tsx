import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import Color from "../../constants/Color";

interface Props {
  style?: ViewStyle;
}

const AddButton: React.FC<Props> = ({ style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Feather name="plus" size={32} color={Color.white} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    backgroundColor: Color.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
