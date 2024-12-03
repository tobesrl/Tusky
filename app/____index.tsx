import React from "react";

import { View, Text, StyleSheet } from "react-native";

const ScavatoButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerShadow}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Clicca Qui</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  innerShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    backgroundColor: "#e0e0e0", // Colore di sfondo dell'elemento
    shadowColor: "rgba(0, 0, 0, 0.2)", // Ombra scura (simula l'interno scavato)
    shadowOffset: { width: 4, height: 4 }, // Ombra spostata verso il basso e destra
    shadowOpacity: 1,
    shadowRadius: 8,
    zIndex: -1, // Metti l'ombra dietro il contenuto
  },
  button: {
    width: 200,
    height: 200,
    backgroundColor: "#e0e0e0", // Colore di sfondo dell'elemento
    borderRadius: 10, // Angoli arrotondati
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#bbb", // Colore del bordo
    zIndex: 1, // Contenuto sopra l'ombra
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ScavatoButton;
