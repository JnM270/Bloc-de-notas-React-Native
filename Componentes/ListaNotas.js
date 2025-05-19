import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'; 
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const ListaNotas = ({ navigation, route }) => {
  const [notes, setNotes] = useState(route.params?.notes || []);

  return (
    <View style={styles.container}>
      {notes.length === 0 ? (
        <Text style={styles.emptyText}>Vacío</Text>
      ) : (
     <FlatList
  data={notes}
  numColumns={2}
  keyExtractor={(item) => item.title}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={[styles.noteItem, item.fixed && styles.fixedNote]}
      onPress={() => navigation.navigate('EditarNotas', { note: item, notes })}
      onLongPress={() => navigation.navigate('SeleccionarNotas', { notes, setNotes })}
    >
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteDescription}>{item.description}</Text>

      {/*Muestra el icono de fijado solo si la nota está fijada*/}
      {item.fixed && (
        <Icon name="thumb-tack" size={16} color="green" style={styles.pinnedIcon} />
      )}
    </TouchableOpacity>
  )}
/>   
)}

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CrearNotas', { notes, setNotes })}>
        <Text style={styles.addButtonText}>+</Text>
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
  emptyText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  noteItem: {
    flex: 1,
    margin: 10,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10, //Bordes redondos
    elevation: 3, //Sombreado
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noteDescription: {
    fontSize: 16,
    color: '#555',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'green',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText: {
    fontSize: 32,
    color: '#fff',
  },
});

export default ListaNotas;


