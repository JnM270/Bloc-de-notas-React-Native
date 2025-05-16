 import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput style={styles.input} placeholder="Nombre de usuario" placeholderTextColor="#cccccc" />
      <TextInput style={styles.input} placeholder="Correo electrónico" placeholderTextColor="#cccccc" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#cccccc" secureTextEntry={true} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acceder</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
        <Text style={styles.link}>Volver al inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a2e",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#333",
    color: "#fff",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#e94560",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  link: {
    color: "#cccccc",
    marginTop: 10,
    fontSize: 14,
  },
});

export default LoginScreen;
