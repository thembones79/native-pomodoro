import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ClockFace from "./src/components/ClockFace";
import { Button } from "./src/components/Button";
import Icon from "react-native-vector-icons/FontAwesome";

const INITIAL_STATE = {
  secondsLeft: 120,
  totalTime: 120,
  isCountingDown: false,
  isSession: true,
  sessionLength: 2,
  breakLength: 1
};

export default class App extends React.Component {
  state = INITIAL_STATE;

  reset = () => {
    clearInterval(this.timer);
    this.setState(INITIAL_STATE);
  }

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
    this.setState(state => ({ secondsLeft: state.secondsLeft - 1 }), this.sessionChange);
  };


  sessionChange = () => {
    if (this.state.secondsLeft <= 0) {
      //this.beep();
      if (this.state.isSession) {
        this.setState(state => ({
          isSession: false,
          secondsLeft: state.breakLength * 60,
          totalTime: state.breakLength * 60
        }));
      } else {
        this.setState(state => ({
          isSession: true,
          secondsLeft: state.sessionLength * 60,
          totalTime: state.sessionLength * 60
        }));
      }
    }
  };






  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.isSession?"tomato":"green"}]}>
        <ClockFace
          isSession={this.state.isSession}
          secondsLeft={this.state.secondsLeft}
          totalTime={this.state.totalTime}
          countdown={this.countdown}
          isCountingDown={this.state.isCountingDown}
          reset={this.reset}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
