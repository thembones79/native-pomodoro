import React from "react";
import { View, Text } from "react-native";
import { Button } from "./Button";
import Icon from "react-native-vector-icons/FontAwesome";

const SettingItem = ({ itemName, value, decrement, increment }) => (
  <View style={styles.settingItemStyle}>
    <View>
      <Text style={styles.settingItemLabelStyle}>{itemName} length</Text>
    </View>
    <View style={styles.settingItemComponentStyle}>
      <Button onPress={decrement} border={1}>
        <Icon name="minus" size={20} color="white" />
      </Button>
      <Text style={styles.settingItemTextStyle}>{value}</Text>
      <Button onPress={increment} border={1}>
        <Icon name="plus" size={20} color="white" />
      </Button>
    </View>
  </View>
);

const styles = {
  settingItemComponentStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  settingItemStyle: {
    alignItems: "center",
    justifyContent: "center"
  },
  settingItemLabelStyle: {
    color: "white",
    marginBottom: 10,
    fontSize: 18
  },
  settingItemTextStyle: {
    color: "white",
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10
  }
};

export default SettingItem;
