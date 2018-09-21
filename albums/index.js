//import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component (functional component i.e. functions that return some jsx to be displayed)
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );


//render it to the device (only the root component (App) use the AppRegistry)
AppRegistry.registerComponent('albums', () => App);


// FUNCTIONAL COMPONENT
// used for representing static data
// can't handle fetching data
//easy to write e.g header component

// CLASS COMPONENT
// more complex with more code
// more functionality and capability
// can be used for fetching data
// easier to write large components
// class based because its based on ES6 classes
