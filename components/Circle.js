import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants, Svg } from 'expo';

export default class Circle extends Component {
    render() {
        return (
          <Svg height={100} width={100}>
            <Svg.Circle
              cx={50}
              cy={50}
              r={45}
              strokeWidth={2.5}
              stroke="#e74c3c"
              fill="transparent"
              style={{
                strokeDasharray: `${250} ${1000}`
              }}
            />
          </Svg>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
});

