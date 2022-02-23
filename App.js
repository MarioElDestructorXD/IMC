import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Constants from "expo-constants";
import fbsdevPNG from "./assets/fbsdev.png";

import { TextInput, Button } from "react-native-paper";

export default class App extends React.Component {
  // valores globais do app
  state = {
    peso: 1,
    altura: 0,
    imc: 0,
    leyenda: "Indeterminado",
    color: "#bdc3c7",
  };

  calcularIMC = () => {
    const resultado = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: Math.ceil(resultado),
    });

    if (resultado < 18) {
      this.setState({
        leyenda: "Peso Bajo",
        color: "#e74c3c",
      });
    } else if (resultado >= 18.1 && resultado < 24) {
      this.setState({
        leyenda: "Normal",
        color: "#2ecc71",
      });
    } else if (resultado > 24 && resultado < 29.9) {
      this.setState({
        leyenda: "Sobrepeso",
        color: "#ea3f2d",
      });
    } else if (resultado >= 29 && resultado < 34.9) {
      this.setState({
        leyenda: "Sobrepreso 1",
        color: "#e67e22",
      });
    } else if (resultado >= 34 && resultado < 39.9) {
      this.setState({
        leyenda: "Sobrepeso 2",
        color: "#ea3f2d",
      });
    } else if (resultado >= 39) {
      this.setState({
        leyenda: "Riesgoso",
        color: "#e61700",
      });
    }
  };
  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.leyenda}>Mi IMC</Text>

        <View style={[styles.panel, { backgroundColor: this.state.color }]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.leyenda}</Text>
        </View>

        <View>
          <TextInput
            style={styles.peso}
            label="Peso"
            onChangeText={(valor) => {
              this.setState({ peso: valor.replace(",", ".") });
            }}
          />
          <TextInput
            style={styles.altura}
            label="Altura"
            onChangeText={(valor) => {
              this.setState({ altura: valor.replace(",", ".") });
            }}
          />
          <Button mode="contained" onPress={this.calcularIMC} color="#000000">
            Calcular
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 10,
  },
  panel: {
    alignSelf: "center",
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    padding: 8,
  },
  leyenda: {
    textAlign: "center",
    fontWeight: "bold",
  },
  resultado: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  diagnostico: {
    textAlign: "center",
    fontSize: 16,
  },
  peso: {
    marginVertical: 10,
  },
  altura: {
    marginVertical: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 155,
  },
});
