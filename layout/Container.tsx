import React from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";

import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import Color from "../constants/Color";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  additionalPaddingTop?: number;
  offInsetTop?: boolean;
  isScrollable?: boolean;
};

const Container: React.FC<Props> = ({
  children,
  style,
  additionalPaddingTop = 16,
  isScrollable,
  offInsetTop,
}) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => {
        const topInset = offInsetTop ? 0 : insets?.top || 0;

        return (
          <View
            style={[
              {
                flex: 1,
                backgroundColor: Color.white,
                paddingTop: topInset + additionalPaddingTop,
              },
            ]}
          >
            {isScrollable ? (
              <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 48 }}
                style={[styles.layout, style]}
              >
                {children}
              </ScrollView>
            ) : (
              <View style={[styles.layout, style]}>{children}</View>
            )}
          </View>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default Container;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
