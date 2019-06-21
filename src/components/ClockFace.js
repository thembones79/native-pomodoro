import React from "react";
import { View } from "react-native";
import Status from "./Status";
import BigCircle from "./Circle";
import Controls from "./Controls";

const ClockFace = ({ isSession, secondsLeft, totalTime, countdown, isCountingDown, reset }) => (
  <View>
    <View>
      <Status isSession={isSession} secondsLeft={secondsLeft} />
      <BigCircle secondsLeft={secondsLeft} totalTime={totalTime} />
    </View>
    <Controls
      countdown={countdown}
      isCountingDown={isCountingDown}
      reset={reset}
    />
  </View>
);

export default ClockFace;
