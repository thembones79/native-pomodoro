import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Constants, Svg } from "expo";

export default class Circle extends Component {


  render() {
    const radius = 150;
    const circleLength = 2 * Math.PI * radius;
    return (
      <View style={styles.circleContainer}>
        <Svg height={320} width={320}>
          <Svg.Circle
            cx={160}
            cy={160}
            r={radius}
            strokeWidth={2.5}
            stroke="#ffffff"
            fill="transparent"
            strokeDasharray={circleLength}
            strokeDashoffset={(60 - this.props.secondsLeft)*(circleLength/60)}
            strokeLinecap="round"
            transition="1s"
            style={{
              transition: "1s"}}
          />
          
        </Svg>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleContainer: {

    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "-90deg" }]
  }
});
