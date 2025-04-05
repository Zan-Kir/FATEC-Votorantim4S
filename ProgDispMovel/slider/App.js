import React, { Component } from "react";
import { View, StyleSheet, Text, Switch, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import { Button } from "react-native-web";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      input: "",
      sexos: [
        { key: "1", nome: "Masculino" },
        { key: "2", nome: "Feminino" },
      ],
      valor: 0,
      sexoAtual: "Masculino",
      status: false,
    };
    this.criarConta = this.criarConta.bind(this);
  }

  criarConta() {
    if (this.state.input === "") {
      alert("Digite seu nome!");
      return;
    } else {
      alert(`Conta Criada com Sucesso \n
        Nome: ${this.state.input}\n
        Valor Limite: ${this.state.valor.toFixed(2)}\n
        Sexo: ${this.state.sexoAtual}\n
        Estado Civil: ${this.state.status ? "Casado" : "Solteiro"}\n`);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome?"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({ input: texto })}
        />
        <Text style={styles.text}> Informe seu Sexo:</Text>
        <Picker
          style={styles.sexos}
          selectedValue={this.state.sexoAtual}
          onValueChange={(itemValue) => this.setState({ sexoAtual: itemValue })}
        >
          {this.state.sexos.map((sexo) => (
            <Picker.Item key={sexo.key} label={sexo.nome} value={sexo.nome} />
          ))}
        </Picker>
        <Text style={styles.text}>Escolha seu Limite:</Text>
        <Slider
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(valorSelecionado) =>
            this.setState({ valor: valorSelecionado })
          }
          value={this.state.valor}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF000"
        />
        <Text style={styles.text}>R$ {this.state.valor.toFixed(2)}</Text>
        <Switch
          style={{ alignSelf: "end" }}
          value={this.state.status}
          onValueChange={(valorSwitch) =>
            this.setState({ status: valorSwitch })
          }
          thumbColor="#FF0000"
        />
        <Text style={styles.text}>
          {this.state.status ? "Casado" : "Solteiro"}
        </Text>
        <Button title="CRIAR CONTA" onPress={this.criarConta} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
  },
  input: {
    height: 46,
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  sexos: {
    marginTop: 15,
    fontSize: 20,
    borderWidth: 1,
  },
});

export default App;
