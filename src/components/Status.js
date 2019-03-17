import React from "react";
import { View, Text } from "react-native";
import Timer from "./Timer";
import Icon from "react-native-vector-icons/FontAwesome";
import { widthScale, heightScale } from './scale';

const Status = ({ isSession, secondsLeft }) => (
  <View style={styles.statusStyle}>
    <Text style={styles.statusLabelStyle}>
      {isSession ? "session": "break"}
    </Text>
    <Timer secondsLeft={secondsLeft} />
    <View>
      {isSession ? (
        <Icon name="rocket" size={70*widthScale} color="white" />
      ) : (
        <Icon name="coffee" size={70*widthScale} color="white" />
      )}
    </View>
  </View>
);

const styles = {
  statusStyle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 60*widthScale
  },
  statusLabelStyle: {
    alignSelf: "center",
    color: "white",
    fontSize: 30*widthScale
  }
};

export default Status;
