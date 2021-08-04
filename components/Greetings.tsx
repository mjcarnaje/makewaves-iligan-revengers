import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  name: string;
}

const Greetings: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Good morning, ${name}`}</Text>
    </View>
  );
};

export default Greetings;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "inter-700",
    fontSize: 24,
    letterSpacing: -0.5,
  },
});
