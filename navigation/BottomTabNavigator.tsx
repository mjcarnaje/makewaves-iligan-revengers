import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import { BottomTabParamList } from "../types";
import Color from "../constants/Color";
import MapScreen from "../screens/Map";
import MedicationScreen from "../screens/Medication";

type TabProps = {
  name: keyof BottomTabParamList;
  component: React.ComponentType<any>;
  icon: React.ComponentProps<typeof Feather>["name"];
}[];

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const tabs: TabProps = [
    {
      name: "Home",
      component: HomeScreen,
      icon: "home",
    },
    {
      name: "Map",
      component: MapScreen,
      icon: "map",
    },
    {
      name: "Medication",
      component: MedicationScreen,
      icon: "heart",
    },
  ];

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Color.tint,
        tabBarStyle: styles.tabStyle,
      }}
    >
      {tabs.map(({ name, icon, component }, idx) => {
        return (
          <BottomTab.Screen
            key={idx}
            name={name}
            component={component}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <View style={styles.iconWrapper}>
                  <Feather
                    name={icon}
                    size={24}
                    color={focused ? Color.tabIconSelected : color}
                  />
                  <Text
                    style={[
                      styles.label,
                      { color: focused ? Color.tabIconSelected : color },
                    ]}
                  >
                    {name}
                  </Text>
                </View>
              ),
            }}
          />
        );
      })}
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    position: "absolute",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 60,
    backgroundColor: Color.bottomTabBackground,
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontFamily: "inter-bold",
    fontSize: 12,
  },
});
