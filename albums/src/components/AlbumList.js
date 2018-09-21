
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
  }
  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;

// by using the extends Component we borrow bunch of functionality from this based component class
// component based class can be imported from the react library
// but you have to keep React in the scope of this file
// reason for that is, when Babel goes through it and converts the jsx into raw js
// it turns all jsx into series of react.element calls

// so to both import React but also d structure the Component class out of it we do it as above

// whenever you write class based component you must define exactly one method (render method)
// the only requirement of the render method is to return some amount of jsx

// classes don't need semicolon at the end

//lifecycyle method - componentWillMount

//.then promise we use in order to get some sort of notification: 'ajax/http request is now compleated'
//our data is here
