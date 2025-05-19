import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo de la app*/}
      <View style={styles.logoContainer}>
        <Image 
          source={require("../assets/logo1.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>¡Bienvenido a Amazing Note!</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Registro")}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#f8f9fa",
   },
   logoContainer: {
    marginBottom: 20, 
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 240,
    height: 240,
    resizeMode: "contain",
  },
   title: {
     fontSize: 28,
     fontWeight: "bold",
     marginBottom: 20,
   },
   buttonContainer: {
     flexDirection: "row",
     gap: 10,
   },
   button: {
     backgroundColor: "#008000",
     paddingVertical: 12,
     paddingHorizontal: 24,
     borderRadius: 5,
 
   },
   buttonText: {
     color: "#fff",
     fontSize: 18,
     fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
   },
   registerText: {
    position: 18,
    fontSize: 16,
    color: "#007bff",
    textDecorationLine: "underline",
   },
 });
 
 export default Inicio;
