import React, { Component } from "react";
import { View, StyleSheet, Text} from "react-native";
import { Constants, Svg } from "expo";
import {widthScale, heightScale} from './scale';


export default class Circle extends Component {
  render() {
    const radius = 150*widthScale;
    const circleLength = 2 * Math.PI * radius;
    const { secondsLeft, totalTime } = this.props;

    return (
      <View style={styles.circleContainer}>
        <Svg height={320*widthScale} width={320*widthScale}>
          <Svg.Circle
            cx={160*widthScale}
            cy={160*widthScale}
            r={radius}
            strokeWidth={2.5}
            stroke="#ffffff"
            fill="transparent"
            strokeDasharray={circleLength}
            strokeDashoffset={
              (totalTime - secondsLeft) * (circleLength / totalTime)
            }
            strokeLinecap="round"
            transition="1s"
            style={{
              transition: "1s"
            }}
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
