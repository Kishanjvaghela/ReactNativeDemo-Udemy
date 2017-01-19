// import library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//Create Component
// A Component is JavaScript function that return some amount of JSX
const App = () => (
    <View>
      <Header headerText='Albums title' />
      <AlbumList />
    </View>
 );
 
// render it on device
AppRegistry.registerComponent('AwesomeProject', () => App);
