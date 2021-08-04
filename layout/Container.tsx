import React, { Fragment } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import Color from "../constants/Color";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const Container: React.FC<Props> = ({ children, style }) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View
          style={[
            {
              flex: 1,
              backgroundColor: Color.white,
              paddingTop: insets?.top,
            },
          ]}
        >
          <View style={[styles.layout, style]}>{children}</View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default Container;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
