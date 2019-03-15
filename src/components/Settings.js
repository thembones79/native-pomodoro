import React from "react";
import { View } from "react-native";
import SettingItem from "./SettingItem";

const Settings = ({
  breakLength,
  sessionLength,
  breakDecrement,
  breakIncrement,
  sessionDecrement,
  sessionIncrement
}) => (
  <View>
    <SettingItem
      itemName="session"
      value={sessionLength}
      decrement={sessionDecrement}
      increment={sessionIncrement}
    />
    <SettingItem
      itemName="break"
      value={breakLength}
      decrement={breakDecrement}
      increment={breakIncrement}
    />
  </View>
);

export default Settings;
