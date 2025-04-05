import { Component } from "react";

const { View, StyleSheet, Text } = require("react-native");

class Pessoas extends Component {
  render(){
    return (
      <View style={styles.areaPessoa}>
        <Text>Olaaaa</Text>
        <Text style={styles.textoPessoa} >Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa} >Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPessoa} >Email: {this.props.data.email} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  areaPessoa:{
    backgroundColor: '#222',
    height: 150,
    marginBottom: 25,
    padding: 15,
  },
  textoPessoa:{
    color: '#fff'
  }
})

export default Pessoas;
