import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import imagem from "./assets/steve.png";
import joia from "./assets/joia.jpg";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'Murilo'
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput style={styles.input}/>
        <Text style={styles.texto}>Bem Vindo</Text>
      </View>
    );

    // return(
    //   <View style={{flex:1, flexDirection: 'column', alignItems: 'stretch', justifyContent:"space-around"}}>

    //   <View style={{width: 100, height: 50, backgroundColor: 'red'}}></View>
    //   <View style={{height: 100, backgroundColor: 'green'}}></View>
    //   <View style={{height: 100,  backgroundColor: 'yellow'}}></View>
    //   <View style={{height: 100,  backgroundColor: 'blue'}}></View>

    //   </View>
    // )

    // return (
    //   <View style={{ marginTop: 20 }}>
    //     <Text style={styles.titulo}> Boa noite </Text>
    //     <Text style={styles.textoPrincipal}>
    //       {" "}
    //       Teste de introdução a React Native{" "}
    //     </Text>
    //     <Text style={styles.textoSecundario}> Tuts tuts </Text>
    //     <Image source={imagem} style={{ width: 200, height: 200 }} />
    //     <Text style={styles.textoImagem}> {nome} </Text>
    //     <Image source={joia} style={{ width: 200, height: 200 }} />
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
  },
  titulo: {
    fontSize: 35,
    color: "black"
  },

  textoPrincipal: {
    fontSize: 30,
    color: "green",
  },

  textoSecundario: {
    color: "#FF0000",
    fontSize: 25,
    margin: 15,
  },

  textoImagem: {
    marginLeft: 70,
    fontSize: 20,
    color: "blue",
  },
});

export default App;
