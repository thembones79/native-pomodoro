import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Circle from './components/Circle';
import AnimatedCircularProgress from './src/AnimatedCircularProgress';


export default class App extends React.Component {

  state = {
    secondsLeft: 60,
    isCountingDown: false
  };
componentDidMount(){
  this.countdown();
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
    this.setState(
      state => ({ secondsLeft: state.secondsLeft - 1 }),

    );
  };


  render() {
    return (
      <View style={styles.container}>
        <Circle secondsLeft={this.state.secondsLeft}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
