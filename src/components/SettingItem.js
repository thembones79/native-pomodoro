import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './Button';

const SettingItem = ({itemName, value, decrement, increment}) => (
<View>
    <View>
        <Text>{itemName} length</Text>
    </View>
    <View>
        <Button onPress={decrement}>-</Button>
        <Text>{value}</Text>
        <Button onPress={increment}>+</Button>
    </View>
</View>
);

export default SettingItem;