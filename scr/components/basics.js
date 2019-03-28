import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import Bananas from './Bananas';
import Greeting from './Greeting';
import Blink from './Blink';
import LotsOfStyles from './LotsOfStyles';
import FixedDimensionsBasics from './FixedDimensionsBasics';
import FlexDimensionsBasics from './FlexDimensionsBasics';
import FlexDirectionBasics from './FlexDirectionBasics';
import JustifyContentBasics from './JustifyContentBasics';
import AlignItemsBasics from './AlignItemsBasics';
import PizzaTranslator from './PizzaTranslator';
import ButtonBasics from './ButtonBasics';
import Touchables from './Touchables';
import SectionListBasics from './SectionListBasics';
import FlatListBasics from './FlatListBasics';
import FetchExample from './FetchExample';

export default class Basics extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.Heading}>1 - Predefine Content</Text>
        <Text style={styles.myName}>This is going to my first app</Text>
        <Text style={styles.welcome}>MGK Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.Heading}>2 - Props</Text>
        <Bananas/>

        <Text style={styles.Heading}>2.1 - Props (Greeting)</Text>
        <Greeting/>

        <Text style={styles.Heading}>3 - State (Blink)</Text>
        <Blink/>

        <Text style={styles.Heading}>4 - Styles</Text>
        <LotsOfStyles/>

         <Text style={styles.Heading}>5 - Fixed Dimensions </Text>
        <FixedDimensionsBasics/>

        <Text style={styles.Heading}>5.1 - Flex Dimensions </Text>
        <FlexDimensionsBasics/>

        <Text style={styles.Heading}>6.1 - Flex Directions </Text>
        <FlexDirectionBasics/>

        <Text style={styles.Heading}>6.2 - Justify Content </Text>
        <JustifyContentBasics/>

        <Text style={styles.Heading}>6.3 - Align Item Basics </Text>
        <AlignItemsBasics/>

        <Text style={styles.Heading}>7 - Pizza Translator </Text>
        <PizzaTranslator/>

        <Text style={styles.Heading}>8.1 - Basics Button</Text>
        <ButtonBasics/>

        <Text style={styles.Heading}>8.2 - Touchables</Text>
        <Touchables/>

        <Text style={styles.Heading}>9.1 - Flate List Basics</Text>
        <FlatListBasics/>

        <Text style={styles.Heading}>9.2 - Section List</Text>
        <SectionListBasics/>

        <Text style={styles.Heading}>10 - Fetch Example</Text>
        <FetchExample/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  Heading:{
    fontSize:18,
    textAlign:'center',
    borderBottomWidth:1.5,
    borderTopWidth:1.5,
    padding:12,
    marginBottom:5,
  },
  myName:{
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
