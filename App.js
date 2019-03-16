import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ClockFace from "./src/components/ClockFace";
import Settings from "./src/components/Settings";
import { Audio } from "expo";
import alarm from "./assets/BeepSound.wav";




const INITIAL_STATE = {
  secondsLeft: 120,
  totalTime: 120,
  isCountingDown: false,
  isSession: true,
  sessionLength: 2,
  breakLength: 1
};


const soundObject = new Audio.Sound();
const dupa = new Audio.Sound(alarm);
const kupa = new Audio(alarm);

async function asyncTask() {

  try {
    await soundObject.loadAsync(require("./assets/BeepSound.wav"));
    await soundObject.playAsync();
    // Your sound is playing!
  } catch (error) {
    // An error occurred!
    alert(error);
  }



}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.alarm = new Audio.Sound(alarm);
  }

componentDidMount(){

asyncTask();

}


  beep = () => {

      soundObject.playAsync();


  };

  beepStop = async () => {
    try {
      await soundObject.stopAsync();
    } catch (error) {
      console.log(error);
    }
  };

  reset = () => {
    this.beepStop();
    clearInterval(this.timer);
    this.setState(INITIAL_STATE);
  };

  countdown = () => {
    if (!this.state.isCountingDown) {
      clearInterval(this.timer);
      this.beep();
      this.setState({ isCountingDown: true });
      this.timer = setInterval(this.timerDecrement, 1000);
    } else {
      this.setState({ isCountingDown: false });
      clearInterval(this.timer);
    }
  };

  timerDecrement = () => {
    this.setState(
      state => ({ secondsLeft: state.secondsLeft - 1 }),
      this.sessionChange
    );
  };

  sessionChange = () => {
    if (this.state.secondsLeft <= 0) {
      this.beep();
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

  decreaseDisplayedTime = () => {
    this.setState({
      secondsLeft: this.state.secondsLeft - 60,
      totalTime: this.state.totalTime - 60
    });
  };

  increaseDisplayedTime = () => {
    this.setState({
      secondsLeft: this.state.secondsLeft + 60,
      totalTime: this.state.totalTime + 60
    });
  };

  sessionDecrement = () => {
    if (this.state.sessionLength > 1) {
      this.setState({ sessionLength: this.state.sessionLength - 1 });
      //the condition below prevents decreasing displayed time when in session mode and pressing "break decrement" button
      if (this.state.isSession) {
        this.decreaseDisplayedTime();
      }
    }
  };

  sessionIncrement = () => {
    if (this.state.sessionLength < 60) {
      this.setState({ sessionLength: this.state.sessionLength + 1 });
      if (this.state.isSession) {
        this.increaseDisplayedTime();
      }
    }
  };

  breakDecrement = () => {
    if (this.state.breakLength > 1) {
      this.setState({ breakLength: this.state.breakLength - 1 });
      if (!this.state.isSession) {
        this.decreaseDisplayedTime();
      }
    }
  };

  breakIncrement = () => {
    if (this.state.breakLength < 60) {
      this.setState({ breakLength: this.state.breakLength + 1 });
      if (!this.state.isSession) {
        this.increaseDisplayedTime();
      }
    }
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.state.isSession ? "tomato" : "green" }
        ]}
      >
        <ClockFace
          isSession={this.state.isSession}
          secondsLeft={this.state.secondsLeft}
          totalTime={this.state.totalTime}
          countdown={this.countdown}
          isCountingDown={this.state.isCountingDown}
          reset={this.reset}
        />

          <Settings
            breakLength={this.state.breakLength}
            sessionLength={this.state.sessionLength}
            breakDecrement={this.breakDecrement}
            breakIncrement={this.breakIncrement}
            sessionDecrement={this.sessionDecrement}
            sessionIncrement={this.sessionIncrement}
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
