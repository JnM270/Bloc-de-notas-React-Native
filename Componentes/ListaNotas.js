import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native'; 
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListaNotas = ({ navigation, route }) => {
  const [notes, setNotes] = useState(route.params?.notes || []);
  const [categories, setCategories] = useState(["Trabajo", "Personal", "Estudio"]); // Categorías de inicio
  const [modalVisible, setModalVisible] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const goToCategory = (selectedCategory) => {
    // Filtra las notas que pertenezcan a la categoría seleccionada
    const filteredNotes = notes.filter(note => note.category === selectedCategory);
    setModalVisible(false);
    navigation.navigate("Grupos", {
      category: selectedCategory,
      notes: filteredNotes,
      setNotes,
      allNotes: notes
    });
  };

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
              {/* Icono de nota fijada */}
              {item.fixed && <Icon name="thumb-tack" size={16} color="green" style={styles.pinnedIcon} />}
            </TouchableOpacity>
          )}
        />   
      )}

      {/* Botón para agregar notas */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CrearNotas', { notes, setNotes })}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {/* Botón para abrir el modal de categorías */}
      <TouchableOpacity style={styles.categoryButton} onPress={() => setModalVisible(true)}>
        <Icon name="folder" size={24} color="white" />
      </TouchableOpacity>

      {/* Modal de categorías */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Categorías</Text>
          <FlatList
            data={categories}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.categoryItem} onPress={() => goToCategory(item)}>
                <Text style={styles.categoryText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TextInput
            style={styles.input}
            placeholder="Nueva categoría"
            value={newCategory}
            onChangeText={setNewCategory}
          />
          <TouchableOpacity style={styles.addCategoryButton} onPress={addCategory}>
            <Text style={styles.addCategoryText}>Agregar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    top: 650
  },
  addButtonText: {
    fontSize: 32,
    color: '#fff',
  },
  categoryButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'green',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    top: 650
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 100,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  categoryText: {
    fontSize: 18,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
  },
  addCategoryButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  addCategoryText: {
    color: '#fff',
    fontSize: 18,
  },
  closeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ListaNotas;
