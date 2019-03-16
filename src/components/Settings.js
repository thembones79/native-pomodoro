import React from "react";
import { View , StyleSheet} from "react-native";
import SettingItem from "./SettingItem";

const Settings = ({
  breakLength,
  sessionLength,
  breakDecrement,
  breakIncrement,
  sessionDecrement,
  sessionIncrement
}) => (
  <View style={styles.settingsStyle}>
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

const styles = {
  settingsStyle: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  }
};

export default Settings;
