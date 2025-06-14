import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"; 


const Inicio = ({ navigation }) => { 
  return ( 
    <View style={styles.container}> 
      {/* Logo de la app*/}
      <View style={styles.logoContainer}> 
        <Image source={require("../assets/logo001.png")} style={styles.image} /> 
      </View> 
      
      {/* Título */}
      <Text style={styles.title}>Bienvenido a Eco del Bosque</Text> 

      {/* Botones */}
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
    backgroundColor: "#c5d1b5", 
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
    fontFamily: "RobotoBold", 
    marginBottom: 20, 
    color: "#0d3900", 
  }, 
  buttonContainer: { 
    flexDirection: "column", 
    alignItems: "center", 
    gap: 15, 
  }, 
  button: { 
    backgroundColor: "#0d3900", 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 15, 
  }, 
  buttonText: { 
    color: "#fff", 
    fontSize: 18, 
    fontFamily: "RobotoRegular", 
  }, 
  registerText: { 
    fontSize: 16, 
    fontFamily: "RobotoRegular", 
    color: "#007bff", 
    textDecorationLine: "underline", 
  }, 
}); 

export default Inicio;
