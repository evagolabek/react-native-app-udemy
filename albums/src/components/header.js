// import libraries for making component ({distructed import - text tag})
import React from 'react';
import { Text } from 'react-native';

//make a component(in this case fat arrow function)
const  Header = () => {
  return <Text>Albums</Text>;
};

//make the component available to other parts of the app (by exporting them with the export statment)
export default Header;
