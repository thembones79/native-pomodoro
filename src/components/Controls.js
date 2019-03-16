import React from "react";
import { View, Text } from "react-native";
import { Button } from "./Button";
import Icon from "react-native-vector-icons/FontAwesome";

const Controls = ({ countdown, isCountingDown, reset }) => (
  <View style={styles.controlsStyle}>
    <Button onPress={countdown} >
      {isCountingDown ? (
        <Icon name="pause" size={40} color="white" />
      ) : (
        <Icon name="play" size={40} color="white" />
      )}
    </Button>
    <Button onPress={reset}>
      <Icon name="refresh" size={40} color="white" />
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
