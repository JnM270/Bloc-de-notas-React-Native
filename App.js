//App maneja la navegación/rutas en el proyecto

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './Componentes/Inicio';
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import ListaNotas from './Componentes/ListaNotas';
import CrearNotas from './Componentes/CrearNotas';
import EditarNotas from './Componentes/EditarNotas';
import SeleccionarNotas from './Componentes/SeleccionarNotas';
import Grupos from './Componentes/Grupos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio">
          {props => <Inicio {...props}/>}
          </Stack.Screen> 
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ListaNotas" component={ListaNotas} />
        <Stack.Screen name="SeleccionarNotas" component={SeleccionarNotas} />
        <Stack.Screen name="CrearNotas" component={CrearNotas} />
        <Stack.Screen name="EditarNotas" component={EditarNotas} />
        <Stack.Screen name="Grupos" component={Grupos} />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
