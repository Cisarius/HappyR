import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, FlatList, View, Text} from 'react-native';


export default function App() {

  return (
    <>
    <FlatList
    data={cities}
    renderItem={({item})=>(
      <View style={{justifyContent:'center',marginBottom:10}}>
      <Text style={{backgroundColor: 'palegreen',color:'white',padding:10}}>
      {item.name}  {item.country}
      </Text>
      </View>
    )}
  />
  </>
  );
}

const cities = [
  { id: 1, name: 'New York', country: 'United States' },
  { id: 2, name: 'London', country: 'England' },
  { id: 3, name: 'Berlin', country: 'Germany' },
  { id: 4, name: 'Paris', country: 'France' },
  { id: 5, name: 'Madrid', country: 'Spain' },
  { id: 6, name: 'Rome', country: 'Italy' },
  { id: 7, name: 'Brussels', country: 'Belgium' },
  { id: 8, name: 'Lisbonne', country: 'Portugal' }
]

