import React from "react";
import { View, Text } from "react-native";
import { Button } from "./Button";
import { FontAwesome } from '@expo/vector-icons';
import { widthScale, fontScale } from './scale';

const Controls = ({ countdown, isCountingDown, reset }) => (
  <View style={styles.controlsStyle}>
    <Button onPress={countdown} >
      {isCountingDown ? (
        <FontAwesome name="pause" size={38*widthScale/fontScale} color="white" />
      ) : (
        <FontAwesome name="play" size={38*widthScale/fontScale} color="white" />
      )}
    </Button>
    <Button onPress={reset}>
      <FontAwesome name="refresh" size={38*widthScale/fontScale} color="white" />
    </Button>
  </View>
);

const styles = {
  controlsStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default Controls;
