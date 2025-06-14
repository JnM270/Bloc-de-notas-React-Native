import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'; 

const Registro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput style={styles.input} placeholder="Usuario" />
      <TextInput style={styles.input} placeholder="Correo electrónico" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmar contraseña" secureTextEntry />
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ListaNotas")}>
                     <Text style={styles.buttonText}>Crear cuenta</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>¿Ya tienes cuenta? Inicia sesión</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c5d1b5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#0d3900",
    fontFamily: "RobotoBold",
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    backgroundColor: "white",
    fontFamily: "RobotoRegular", 
  },
  button: {
    backgroundColor: '#0d3900',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: "RobotoRegular",
  },
   loginText: {
    marginTop: 10,
    color: "#0d3900",
    fontFamily: "RobotoRegular",
  },
});

export default Registro;
