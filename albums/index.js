//import library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';


//create a component
const App = () => (
    <Text>Puffin</Text>
  );


//render it to the device (only the root component (App) use the AppRegistry)
AppRegistry.registerComponent('albums', () => App);
