import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuProvider } from './src/context/MenuContext';
import { RootStackParamList } from './src/types';
import HomeScreen from './src/screens/HomeScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import ManageMenuScreen from './src/screens/ManageMenuScreen';
import GuestMenuScreen from './src/screens/GuestMenuScreen';
import DetailsScreen from './src/screens/DetailsScreen';
const Stack=createNativeStackNavigator<RootStackParamList>();
export default function App() {
 return <MenuProvider><NavigationContainer><Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#193B35'},headerTintColor:'#FFFFFF',headerTitleStyle:{fontWeight:'800'}}}>
  <Stack.Screen name="Home" component={HomeScreen} options={{title:"Christoffel's Menu"}}/>
  <Stack.Screen name="AddItem" component={AddItemScreen} options={{title:'Add menu item'}}/>
  <Stack.Screen name="ManageMenu" component={ManageMenuScreen} options={{title:'Manage menu'}}/>
  <Stack.Screen name="GuestMenu" component={GuestMenuScreen} options={{title:'Guest menu'}}/>
  <Stack.Screen name="Details" component={DetailsScreen} options={{title:'Menu details'}}/>
 </Stack.Navigator></NavigationContainer></MenuProvider>;
}
