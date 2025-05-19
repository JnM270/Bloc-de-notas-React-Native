import { StyleSheet, View, FlatList, TouchableOpacity, Text, Alert } from 'react-native'; 
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SeleccionarNotas = ({ route, navigation }) => {
  const { notes, setNotes } = route.params;
  const [selectedNotes, setSelectedNotes] = useState([]);

  const toggleSelect = (note) => {
    setSelectedNotes((prev) =>
      prev.includes(note) ? prev.filter(n => n !== note) : [...prev, note]
    );
  };

  const confirmAction = (action, handler) => {
    Alert.alert(
      action,
      `¿Quieres ${action.toLowerCase()} las notas seleccionadas?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sí', onPress: handler },
      ],
      { cancelable: true }
    );
  };

  const deleteNotes = () => {
    confirmAction("Eliminar", () => {
      const updatedNotes = notes.filter(note => !selectedNotes.includes(note));
      setNotes(updatedNotes); 
      setSelectedNotes([]); 
      navigation.navigate("ListaNotas", { notes: updatedNotes });
    });
  };
const fixNotes = () => {
  if (selectedNotes.length === 0) return;

  const alreadyPinned = selectedNotes.filter(note => note.fixed);
  const newPinned = selectedNotes.filter(note => !note.fixed);

  if (alreadyPinned.length > 0) {
    Alert.alert(
      'Desfijar Notas',
      'Algunas notas ya están fijadas. ¿Quieres quitarlas de la lista de fijadas?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sí',
          onPress: () => {
            // Desfijar notas y reordenar alfabéticamente
            const updatedNotes = notes.map(note =>
              alreadyPinned.includes(note) ? { ...note, fixed: false } : note
            ).sort((a, b) => a.title.localeCompare(b.title));

            setNotes(updatedNotes);
            setSelectedNotes([]);
            navigation.navigate("ListaNotas", { notes: updatedNotes });
          },
        },
      ],
      { cancelable: true }
    );
  } else {
    Alert.alert(
      'Fijar Notas',
      '¿Quieres fijar las notas seleccionadas?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sí',
          onPress: () => {
            const unfixedNotes = notes.filter(note => !selectedNotes.includes(note));
            const fixedNotes = selectedNotes.map(note => ({ ...note, fixed: true }));

            setNotes([...fixedNotes, ...unfixedNotes]);
            setSelectedNotes([]);
            navigation.navigate("ListaNotas", { notes: [...fixedNotes, ...unfixedNotes] });
          },
        },
      ],
      { cancelable: true }
    );
  }
};


  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        numColumns={2}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.noteItem, selectedNotes.includes(item) && styles.selected]}
            onLongPress={() => toggleSelect(item)}
          >
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Botones de acción */}
      {selectedNotes.length > 0 && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={deleteNotes}>
            <Icon name="trash" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="lock" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={fixNotes}>
            <Icon name="thumb-tack" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="folder" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="exchange" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  noteItem: {
    flex: 1,
    margin: 10,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    elevation: 3,
  },
  selected: {
    backgroundColor: '#d4edda', // Verde suave al seleccionar
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noteDescription: {
    fontSize: 16,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default SeleccionarNotas;

