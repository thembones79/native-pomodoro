import React from "react";
import { View, Text } from "react-native";
import Timer from "./Timer";
//import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome } from '@expo/vector-icons';
import { widthScale, fontScale } from './scale';

const Status = ({ isSession, secondsLeft }) => (
  <View style={styles.statusStyle}>
    <Text style={styles.statusLabelStyle}>
      {isSession ? "session": "break"}
    </Text>
    <Timer secondsLeft={secondsLeft} />
    <View>
      {isSession ? (
        <FontAwesome name="rocket" size={58*widthScale/fontScale} color="white" />
      ) : (
        <FontAwesome name="coffee" size={58*widthScale/fontScale} color="white" />
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
    top: 50*widthScale
  },
  statusLabelStyle: {
    alignSelf: "center",
    color: "white",
    fontSize: 26*widthScale/fontScale
  }
};

export default Status;
