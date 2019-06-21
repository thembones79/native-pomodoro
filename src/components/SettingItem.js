import React from "react";
import { View, Text } from "react-native";
import { Button } from "./Button";
import { FontAwesome } from '@expo/vector-icons';
import { widthScale, fontScale } from "./scale";

const SettingItem = ({ itemName, value, decrement, increment }) => (
  <View style={styles.settingItemStyle}>
    <View>
      <Text style={styles.settingItemLabelStyle}>{itemName} length</Text>
    </View>
    <View style={styles.settingItemComponentStyle}>
      <Button onPress={decrement} border={1}>
        <FontAwesome name="minus" size={20*widthScale/fontScale} color="white" />
      </Button>
      <Text style={styles.settingItemTextStyle}>{value}</Text>
      <Button onPress={increment} border={1}>
        <FontAwesome name="plus" size={20*widthScale/fontScale} color="white" />
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
    marginBottom: 10*widthScale,
    fontSize: 16*widthScale/fontScale
  },
  settingItemTextStyle: {
    color: "white",
    fontSize: 28*widthScale/fontScale,
    marginLeft: 10*widthScale,
    marginRight: 10*widthScale
  }
};

export default SettingItem;
