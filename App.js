import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "./src/styles/Style";

// Importa o hook useState do React
import React, { useState } from "react";

// Importa o componente TxtInputComponent
import TxtInputComponent from "./src/componentes/TxtInputComponent";

// Define o componente principal da aplicação
export default function Calcular() {
  // Define os estados para armazenar os valores de Celsius, Fahrenheit e a visibilidade do modal
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [visible, setVisible] = useState(false);

  // Função para converter Celsius para Fahrenheit
  const converterParaFahrenheit = () => {
    // Verifica se o campo Celsius está vazio
    if (celsius === "") {
      // Mostra um alerta se os dados estiverem incompletos
      alert("Dados incompletos");
    } else {
      // Converte o valor de Celsius para Fahrenheit
      const valorCelsius = parseFloat(celsius);
      const valorFahrenheit = (valorCelsius * 9) / 5 + 32;
      // Define o estado de Fahrenheit com o valor convertido e torna o modal visível
      setFahrenheit(valorFahrenheit.toFixed(2));
      setVisible(true);
    }
  };

  // Função para calcular novamente, resetando o valor de Celsius e escondendo o modal
  const calcularNovamente = () => {
    setCelsius("");
    setVisible(false);
  };

  // Renderiza os componentes na tela
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcular</Text>
      <TxtInputComponent
        txtplace="Digite a temperatura"
        value={celsius}
        changeText={setCelsius}
      />
      <TouchableOpacity style={styles.button} onPress={converterParaFahrenheit}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>
      <Modal visible={visible}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Resultado da conversão</Text>
          <TouchableOpacity style={styles.button} onPress={calcularNovamente}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
          <Text style={styles.result}>{fahrenheit}</Text>
        </View>
      </Modal>
    </View>
  );
}
