import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, Button } from "react-native";

export default function Settings({ navigation, route}: StackScreenProps<any>) {
  console.log(route);
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 55,
      }}
    >
      <View>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Settings</Text>
      </View>
      <Button
        title="To Not Found Page"
        onPress={() => {
          navigation.navigate("NotFound");
        }}
      />
    </View>
  );
}
