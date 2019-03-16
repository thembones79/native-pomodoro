import React from "react";
import { View, Text } from "react-native";
import { Button } from "./Button";
import Icon from "react-native-vector-icons/FontAwesome";

const SettingItem = ({ itemName, value, decrement, increment }) => (
  <View>
    <View>
      <Text>{itemName} length</Text>
    </View>
    <View>
      <Button onPress={decrement}>
        <Icon name="minus" size={30} color="white" />
      </Button>
      <Text>{value}</Text>
      <Button onPress={increment}>
        <Icon name="plus" size={30} color="white" />
      </Button>
    </View>
  </View>
);

const styles = {
  settingItemStyle: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  }
};

export default SettingItem;
