import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Course, RootStackParamList } from '../types';
import { COURSES } from '../utils/menuUtils';
import { useMenu } from '../context/MenuContext';
import ActionButton from '../components/ActionButton';
type Props = NativeStackScreenProps<RootStackParamList,'AddItem'>;
export default function AddItemScreen({navigation}:Props) {
  const [name,setName]=useState(''); const [description,setDescription]=useState('');
  const [course,setCourse]=useState<Course>('Starter'); const [price,setPrice]=useState('');
  const {addMenuItem}=useMenu();
  const save=()=>{ if(addMenuItem(name,description,course,price)) navigation.navigate('Home'); };
  return <ScrollView style={s.page} contentContainerStyle={s.content}>
    <Text style={s.title}>Add menu item</Text><Text style={s.sub}>Enter the details of the dish below.</Text>
    <Text style={s.label}>Dish name</Text><TextInput style={s.input} value={name} onChangeText={setName} placeholder="e.g. Herb chicken"/>
    <Text style={s.label}>Description</Text><TextInput style={[s.input,{height:90,textAlignVertical:'top'}]} value={description} onChangeText={setDescription} multiline placeholder="Describe the dish"/>
    <Text style={s.label}>Course</Text>
    {COURSES.map((c)=><Pressable key={c} onPress={()=>setCourse(c)} style={[s.course,course===c&&s.selected]}><Text style={{color:course===c?'white':'#193B35',fontWeight:'700'}}>{c}</Text></Pressable>)}
    <Text style={s.label}>Price (R)</Text><TextInput style={s.input} value={price} onChangeText={setPrice} keyboardType="decimal-pad" placeholder="0.00"/>
    <ActionButton title="Save menu item" onPress={save}/><ActionButton title="Cancel" secondary onPress={()=>navigation.goBack()}/>
  </ScrollView>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#F4F6F2'},content:{padding:18},title:{fontSize:28,fontWeight:'900',color:'#193B35'},sub:{color:'#66756F',marginBottom:18},label:{fontWeight:'800',color:'#193B35',marginTop:12,marginBottom:6},input:{backgroundColor:'white',borderWidth:1,borderColor:'#D6E0DB',borderRadius:10,padding:13,fontSize:15},course:{padding:12,borderRadius:9,backgroundColor:'white',marginVertical:4,borderWidth:1,borderColor:'#D6E0DB'},selected:{backgroundColor:'#193B35',borderColor:'#193B35'}});
