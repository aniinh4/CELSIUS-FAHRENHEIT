import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "./src/styles/Style";

// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TxtInputComponent from "./src/componentes/TxtInputComponent";

export default function Calcular() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [visible, setVisible] = useState(false);

  const converterParaFahrenheit = () => {
    if (celsius === "") {
      alert("Dados incompletos");
    } else {
      const valorCelsius = parseFloat(celsius);
      const valorFahrenheit = (valorCelsius * 9) / 5 + 32;
      setFahrenheit(valorFahrenheit.toFixed(2));
      setVisible(true);
    }
  };

  const calcularNovamente = () => {
    setCelsius("");
    setVisible(false);
  };

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
