// import libraries for making component ({distructed import - text tag})
import React from 'react';
import { Text } from 'react-native';

//make a component(in this case fat arrow function)
const  Header = () => {
  const { textStyle } = styles;
  return <Text style={textStyle}>Albums</Text>;
};

const styles = {
  textStyle: {
    fontSize: 50
  }
};

//make the component available to other parts of the app (by exporting them with the export statment)
export default Header;
