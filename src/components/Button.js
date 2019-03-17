import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { widthScale, heightScale } from './scale';

const Button = ({ onPress, children, border }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle, { borderWidth: border }]}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "white",
    fontSize: 28*widthScale,
    fontWeight: "300",
    paddingTop: 10*widthScale,
    paddingBottom: 10*widthScale
  },
  buttonStyle: {
    alignSelf: "center",
    width: 40*widthScale,
    height: 40*widthScale,
    borderRadius: 20*widthScale,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5*widthScale,
    marginRight: 5*widthScale,
    marginTop: 5*widthScale,
    marginBottom: 5*widthScale
  }
};

export { Button };
