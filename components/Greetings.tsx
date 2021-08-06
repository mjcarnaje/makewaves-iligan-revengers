import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  name: string;
}

const Greetings: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.goodMorning}>Good Morning,</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Greetings;

const styles = StyleSheet.create({
  container: {},
  goodMorning: {
    fontFamily: "inter-bold",
    fontSize: 26,
    letterSpacing: -0.5,
  },
  name: {
    fontFamily: "inter-bold",
    fontSize: 24,
    letterSpacing: -0.5,
    lineHeight: 26,
  },
});
