import * as React from "react";
import { Image } from "react-native";
import styles from "../estilo/estilo";
import { LinearGradient } from "expo-linear-gradient";

export default function Header() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["black", "#FF4500"]}
      style={styles.background}
    >
      <Image
        source={{
          uri: "https://brazucadesign.files.wordpress.com/2020/03/virtuspro_logo_sports.png?w=375",
        }}
        style={{ width: 180, height: 180, marginTop: -80 }}
      ></Image>
    </LinearGradient>
  );
}
