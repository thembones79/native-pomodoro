import React from 'react';
import {Text, View} from 'react-native';

const Timer = ({secondsLeft}) => {

    function addZero(number){
        number < 10 ? "0"+ number : number;
    }

    let minutes = addZero(Math.floor(secondsLeft / 60));
    let seconds = addZero(secondsLeft % 60);

    return <View><Text>{minutes + ":" + seconds}</Text></View>;
}

export default Timer;