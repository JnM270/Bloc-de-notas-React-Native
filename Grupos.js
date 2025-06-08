import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Grupos = ({ navigation, route }) => {
  const { category, notes, setNotes, allNotes } = route.params;

  const filteredNotes = allNotes.filter(note => note.category === category);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categoría: {category}</Text>
      {filteredNotes.length === 0 ? (
        <Text style={styles.emptyText}>No hay notas para esta categoría</Text>
      ) : (
        <FlatList
          data={filteredNotes}
          numColumns={2}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.noteItem, item.fixed && styles.fixedNote]}
              onPress={() => navigation.navigate('EditarNotas', { note: item, notes: allNotes })}
              onLongPress={() => navigation.navigate('SeleccionarNotas', { notes: allNotes, setNotes })}
            >
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text style={styles.noteDescription}>{item.description}</Text>
              {item.fixed && <Icon name="thumb-tack" size={16} color="green" style={styles.pinnedIcon} />}
            </TouchableOpacity>
          )}
        />
      )}

      {/* Botón para agregar nueva nota en la categoría */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CrearNotas', { notes: allNotes, setNotes, category })}
      >
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  noteItem: {
    flex: 1,
    margin: 10,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    elevation: 3,
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

export default Grupos;
