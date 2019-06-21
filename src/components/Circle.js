import React, { Component } from "react";
import { View, StyleSheet, Text} from "react-native";

//import { Constants} from "expo";

import { Svg } from 'expo';
const { Circle, Rect } = Svg;

//import { Circle } from 'react-native-svg'
//import * as Svg from 'react-native-svg'
import {widthScale, heightScale} from './scale';


export default class BigCircle extends Component {
  render() {
    const radius = 150*widthScale;
    const circleLength = 2 * Math.PI * radius;
    const { secondsLeft, totalTime } = this.props;

    return (
      <View style={styles.circleContainer}>
        <Svg height={320*widthScale} width={320*widthScale}>
          <Circle
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
