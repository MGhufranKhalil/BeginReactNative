import React, { Component } from 'react';
import { AppRegistry, Image,StyleSheet } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={styles.fullWidth}/>
    );
  }
}
const styles = StyleSheet.create({
    fullWidth:{
        width:420,
        height:230,
    },
});
