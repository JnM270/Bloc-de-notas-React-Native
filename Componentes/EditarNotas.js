import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'; 
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const EditarNotas = ({ route, navigation }) => {
  const { note, notes, setNotes, categories, setCategories } = route.params;
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'La nota debe tener un título');
      return;
    }
    if (description.length > 250) {
      Alert.alert('Error', 'La descripción no puede superar los 250 caracteres');
      return;
    }
    if (notes.some(n => n.title === title && n.title !== note.title)) {
      Alert.alert('Error', 'El título ya existe, elige otro');
      return;
    }

    // Se actualiza la nota, conservando la categoría
    const updatedNotes = notes.map(n =>
      n.title === note.title ? { ...n, title, description } : n
    ).sort((a, b) => a.title.localeCompare(b.title));

    
    navigation.navigate('ListaNotas', { notes: updatedNotes, categories: route.params });
  };

  const handleDelete = () => {
    Alert.alert(
      'Eliminar Nota',
      '¿Quieres eliminar esta nota?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sí',
          onPress: () => {
            const updatedNotes = notes.filter(n => n.title !== note.title);
            
            navigation.navigate('ListaNotas', { notes: updatedNotes, categories });
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Nota</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        maxLength={250}
        multiline
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={handleSave}>
          <Icon name="save" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, styles.deleteButton]} onPress={handleDelete}>
          <Icon name="trash" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#c5d1b5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#0d3900",
    fontFamily:"RobotoBold"
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    backgroundColor: 'white',
    fontFamily: "RobotoRegular",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: '#0d3900',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  deleteButton: {
    backgroundColor: '#b22222',
  },
});

export default EditarNotas;
