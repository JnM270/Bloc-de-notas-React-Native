import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TextInput} from 'react-native'; 
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListaNotas = ({ navigation, route }) => {
  const [notes, setNotes] = useState(route.params?.notes || []);
  const [categories, setCategories] = useState(["Trabajo", "Personal", "Estudio", "Favoritos"]); // Grupos por defecto
  const [modalVisible, setModalVisible] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    if (route.params?.notes) {
      setNotes(route.params.notes);
    }
    if (route.params?.categories) {
      setCategories(route.params.categories);
    }
  }, [route.params]);

  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const goToCategory = (selectedCategory) => {
    const filteredNotes = notes.filter(note => note.category === selectedCategory);
    setModalVisible(false);
    navigation.navigate("Grupos", {
      category: selectedCategory,
      notes: filteredNotes,
      setNotes,
      allNotes: notes,
      categories,
      setCategories,
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
              onPress={() => navigation.navigate('EditarNotas', { note: item, notes, categories })}
              onLongPress={() => navigation.navigate('SeleccionarNotas', { notes, setNotes })}
            >
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text style={styles.noteDescription}>{item.description}</Text>
              {item.fixed && <Icon name="thumb-tack" size={16} color="#0d3900" style={styles.pinnedIcon} />}
            </TouchableOpacity>
          )}
        />   
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CrearNotas', { notes, setNotes, categories, setCategories })}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryButton} onPress={() => setModalVisible(true)}>
        <Icon name="folder" size={24} color='#fff' />
      </TouchableOpacity>

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
    backgroundColor: '#c5d1b5',
  },
  emptyText: {
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
    color: "#0d3900"
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
    color: "#0d3900"
  },
  noteDescription: {
    fontSize: 16,
    color: '#555',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: "#0d3900",
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
    backgroundColor: "#0d3900",
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
    backgroundColor: '#f3efe2',
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
    color: "0d3900"
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
    borderRadius: 15,
    backgroundColor:"white",
    marginTop: 10,
  },
  addCategoryButton: {
    backgroundColor: '#0d3900',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  addCategoryText: {
    color: '#fff',
    fontSize: 18,
  },
  closeButton: {
    backgroundColor: '#B22222',
    paddingVertical: 10,
    borderRadius: 25,
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
