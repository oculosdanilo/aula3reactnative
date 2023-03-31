import * as React from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import styles from "../estilo/estilo";
import { LinearGradient } from "expo-linear-gradient";

export default function Box() {
  return (
    <View
      // Button Linear Gradient
      style={styles.box}
    >
      <TextInput style={styles.inputs} placeholder="e-mail" />

      <TextInput style={styles.inputs} placeholder="senha" />

      <TouchableOpacity style={{ width: "80%" }}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#D2691E", "#FF4500"]}
          style={styles.button}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>LOGAR</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
