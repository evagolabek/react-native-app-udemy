import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
        Click here
      </Text>
    </TouchableOpacity>
  );
};

// flex1 means expand as much content as possible
// alignSelf (property type of the flexbox stretch) fills until the limit of the container

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgorundColor: '#fff',
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
