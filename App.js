import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SectionList, Text, TouchableOpacity, Alert} from 'react-native';


export default function App() {

const ListByCountry = (Input = []) => {
 const data = [...Input];

 const filtereddata = data.reduce((Stack, item) => {
   const group = item.country;
  if (Stack[group]) {
    Stack[group].data.push(item);
  } else {
    Stack[group] = {
      title: group,
      data: [item],
    };
  }
  return Stack;
 })
 console.log(filtereddata)
 const Filtered = Object.keys(filtereddata).map((key) => {
   return filtereddata[key];
 })
 return filtereddata;
}

  return (
    <SectionList
    sections={ListByCountry(cities)}
    renderSectionHeader={({section})=>{
      return (
        <View>
          <Text>{section.title}</Text>
        </View>
      );
    }}
      renderItem={({item}) => (
      <TouchableOpacity onPress={() => Alert.alert('Pressed')}
       style={{justifyContent:'center',marginBottom:10}}>
      <Text style={{backgroundColor: 'palegreen',color:'white',padding:10}}>
      {item.name}
      </Text>
      </TouchableOpacity>
    )}
  />
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

