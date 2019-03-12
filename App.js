import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Circle from "./src/components/Circle";
import {Button} from "./src/components/Button";
import Icon from "react-native-vector-icons/FontAwesome";

export default class App extends React.Component {
  state = {
    secondsLeft: 60,
    isCountingDown: false
  };

  countdown = () => {
    if (!this.state.isCountingDown) {
      clearInterval(this.timer);
      this.setState({ isCountingDown: true });
      this.timer = setInterval(this.timerDecrement, 1000);
    } else {
      this.setState({ isCountingDown: false });
      clearInterval(this.timer);
    }
  };

  timerDecrement = () => {
    this.setState(state => ({ secondsLeft: state.secondsLeft - 1 }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Circle secondsLeft={this.state.secondsLeft} />
        <Button onPress={this.countdown}>
          {this.state.isCountingDown ? (
            <Icon name="refresh" size={30} color="white" />
          ) : (
              <Icon name="play" size={30} color="white" />
          )}
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center"
  }
});
