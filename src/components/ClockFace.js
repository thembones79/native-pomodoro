import React from "react";
import { View } from "react-native";
import Status from "./Status";
import Circle from "./Circle";

const ClockFace = ({ isSession, secondsLeft, totalTime }) => (
  <View>
    <Status isSession={isSession} secondsLeft={secondsLeft} />
    <Circle secondsLeft={secondsLeft} totalTime={totalTime} />
  </View>
);

export default ClockFace;
