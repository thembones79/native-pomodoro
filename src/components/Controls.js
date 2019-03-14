import React from "react";
import { View, Text } from "react-native";
import { Button } from "./Button";
import Icon from "react-native-vector-icons/FontAwesome";

const Controls = ({ countdown, isCountingDown, reset }) => (
  <View>
    <Button onPress={countdown}>
      {isCountingDown ? (
        <Icon name="pause" size={30} color="white" />
      ) : (
        <Icon name="play" size={30} color="white" />
      )}
    </Button>
    <Button onPress={reset}>
      <Icon name="refresh" size={30} color="white" />
    </Button>
  </View>
);

export default Controls;
