import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ClockFace from "./src/components/ClockFace";
import { Button } from "./src/components/Button";
import Icon from "react-native-vector-icons/FontAwesome";

export default class App extends React.Component {
  state = {
    secondsLeft: 120,
    totalTime: 120,
    isCountingDown: false,
    isSession: true,
    sessionLength: 2,
    breakLength: 1
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
        <ClockFace
          isSession={this.state.isSession}
          secondsLeft={this.state.secondsLeft}
          totalTime={this.state.totalTime}
        />
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
