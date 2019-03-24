import React from "react";
import { Text, View } from "react-native";
import { widthScale, fontScale } from './scale';


const Timer = ({ secondsLeft }) => {
  addZero = number => (number < 10 ? "0" + number : number);

  let minutes = addZero(Math.floor(secondsLeft / 60));
  let seconds = addZero(secondsLeft % 60);

  return (
    <View>
      <Text style={styles.statusTimerStyle}>{minutes + ":" + seconds}</Text>
    </View>
  );
};

const styles = {
  statusTimerStyle: {
    alignSelf: "center",
    color: "white",
    fontSize: 90*widthScale/fontScale,
    fontWeight: '100',
    fontFamily: "System"
  }
};
export default Timer;
