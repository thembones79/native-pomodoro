import React from "react";
import { Text, TouchableOpacity } from "react-native";

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
    fontSize: 28,
    fontWeight: "300",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  }
};

export { Button };
