import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useMenu } from '../context/MenuContext';
type Props=NativeStackScreenProps<RootStackParamList,'Details'>;
export default function DetailsScreen({route}:Props) {
 const {menuItems}=useMenu(); const item=menuItems.find(x=>x.id===route.params.itemId);
 if(!item) return <Text style={s.missing}>This menu item is no longer available.</Text>;
 return <ScrollView style={s.page} contentContainerStyle={s.content}><Text style={s.course}>{item.course.toUpperCase()}</Text><Text style={s.title}>{item.dishName}</Text><Text style={s.description}>{item.description}</Text><Text style={s.price}>R {item.price.toFixed(2)}</Text></ScrollView>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#F4F6F2'},content:{padding:22},course:{color:'#B16B35',fontWeight:'900',letterSpacing:1.5},title:{fontSize:30,fontWeight:'900',color:'#193B35',marginTop:10},description:{fontSize:16,color:'#586A62',lineHeight:24,marginTop:16},price:{fontSize:24,fontWeight:'900',color:'#193B35',marginTop:25},missing:{padding:20,color:'#A43C34'}});
