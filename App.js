import React from "react";
import { Text, View } from "react-native";
import ClockFace from "./src/components/ClockFace";
import Settings from "./src/components/Settings";
import { Audio } from "expo";
import { widthScale, fontScale } from "./src/components/scale";



const INITIAL_STATE = {
  secondsLeft: 1500,
  totalTime: 1500,
  isCountingDown: false,
  isSession: true,
  sessionLength: 25,
  breakLength: 5
};

const soundObject = new Audio.Sound();

async function loadSound() {
  try {
    await soundObject.loadAsync(require("./assets/BeepSound.wav"));
  } catch (error) {
    alert(error);
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    loadSound();

  }

  beep = () => {
    soundObject.playAsync();
    soundObject.replayAsync();
  };

  beepStop = async () => {
    try {
      await soundObject.pauseAsync();
      await soundObject.setPositionAsync(0);
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
      this.setState({ isCountingDown: true });
      this.timer = setInterval(
        this.timerDecrement,
        1000
      );
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
          { backgroundColor: this.state.isSession ? "tomato" : "#00de88" }
        ]}
      >
        <Text style={styles.headerStyle}>Pomodoro Clock</Text>
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

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerStyle: {
    color: "white",
    fontSize: 36*widthScale/fontScale,
    fontWeight: "200",
    marginTop: 40*widthScale,
    marginBottom: 20*widthScale
  }
};
