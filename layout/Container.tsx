import React from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";

import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import Color from "../constants/Color";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  isScrollable?: boolean;
};

const Container: React.FC<Props> = ({ children, style, isScrollable }) => {
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
          {isScrollable ? (
            <ScrollView
              contentContainerStyle={{ paddingBottom: 48 }}
              style={[styles.layout, style]}
            >
              {children}
            </ScrollView>
          ) : (
            <View style={[styles.layout, style]}>{children}</View>
          )}
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
