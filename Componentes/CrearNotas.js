import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

const CrearNotas = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const notes = route.params?.notes || [];

  const handleSave = () => {
    if (!title.trim() || !description.trim()) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (notes.some(note => note.title === title)) {
      Alert.alert('Error', 'El título ya existe, elige otro');
      return;
    }

    if (description.length > 250) {
      Alert.alert('Error', 'La descripción no puede superar los 250 caracteres');
      return;
    }

    const newNote = { title, description };
    const updatedNotes = [...notes, newNote].sort((a, b) => a.title.localeCompare(b.title));

    navigation.navigate('ListaNotas', { notes: updatedNotes });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nueva Nota</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
        maxLength={250}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar Nota</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CrearNotas;
