/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import Settings from "../screens/Settings";
import BottomTabNavigator from "./BottomTabNavigator";

export default function Navigation() {
  const RootStack = createStackNavigator();

  function RootNavigator() {
    return (
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="HomeScreen" component={BottomTabNavigator} />
        <RootStack.Screen name="Settings" component={Settings} />
        <RootStack.Screen name="NotFound" component={NotFoundScreen} />
      </RootStack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
