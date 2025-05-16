import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a Amazing Note!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,

  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  },
});

export default Inicio;
