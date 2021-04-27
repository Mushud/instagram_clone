import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, Button } from "react-native";

export default function Settings({navigation}: StackScreenProps<any>) {
  return (
    <View
      style={{
        flex: 1,
              backgroundColor: "green",
        paddingTop: 55
      }}
      >
          <Button title="Go Back" onPress={() => {
              navigation.goBack();
          }}/>
    </View>
  );
}
