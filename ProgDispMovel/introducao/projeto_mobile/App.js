import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import imagem from './assets/steve.png'
import joia from './assets/joia.jpg'

class App extends Component{
  render() {

    let nome = 'Murilo';

    return (
      <View>
        <Text> Boa noite </Text>
        <Text> Teste de introdução a React Native </Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15 }}> Tuts tuts </Text>
        <Image source={imagem} style={{width: 200, height: 200}} />
        <Text style={{marginLeft: 75}}> {nome} </Text>
        <Image source={joia} style={{width: 200, height: 200}} />
      </View>
    );
  }
}

export default App;