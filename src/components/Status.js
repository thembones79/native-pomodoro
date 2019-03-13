import React from "react";
import { View, Text } from "react-native";
import Timer from "./Timer";
import Icon from "react-native-vector-icons/FontAwesome";

const Status = ({ isSession, secondsLeft }) => (
  <View>
    <Text>{isSession ? "session" : "break"}</Text>
    <Timer secondsLeft={secondsLeft} />
    <View>
      {isSession ? (
        <Icon name="rocket" size={30} color="white" />
      ) : (
        <Icon name="coffee" size={30} color="white" />
      )}
    </View>
  </View>
);

export default Status;
