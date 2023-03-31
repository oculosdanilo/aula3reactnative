import * as React from "react";
import { View } from "react-native";
import styles from "./src/estilo/estilo";
import Header from "./src/componentes/header";
import Box from "./src/componentes/box";
import Footer from "./src/componentes/footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Box></Box>
      <Footer></Footer>
    </View>
  );
}
