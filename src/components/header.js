// import library for making Component
import React from 'react';
import { Text, View } from 'react-native';

// Make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>

    <Text style={textStyle} >{props.headerText}</Text>

    </View>
  );
};

const styles = {
    viewStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      fontSize: 20
    }
};

// make Component avaialbe to other part of the App
export default Header;
