import React from 'react';
import { ScrollView, Text, View, StyleSheet, Pressable } from 'react-native';
import { useMenu } from '../context/MenuContext';
import ActionButton from '../components/ActionButton';
export default function ManageMenuScreen() {
 const {menuItems,removeMenuItem}=useMenu();
 return <ScrollView style={s.page} contentContainerStyle={s.content}><Text style={s.title}>Manage menu items</Text><Text style={s.sub}>Remove dishes that should no longer appear on the Home menu.</Text>
 {menuItems.length===0?<Text style={s.empty}>There are no menu items to manage.</Text>:menuItems.map(item=><View key={item.id} style={s.card}><View style={{flex:1}}><Text style={s.name}>{item.dishName}</Text><Text style={s.meta}>{item.course} · R {item.price.toFixed(2)}</Text></View><Pressable accessibilityRole="button" onPress={()=>removeMenuItem(item.id)}><Text style={s.remove}>REMOVE</Text></Pressable></View>)}
 <ActionButton title="Back to Home" secondary onPress={()=>{ /* navigation is provided by the header back control */ }}/>
 </ScrollView>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#F4F6F2'},content:{padding:18},title:{fontSize:27,fontWeight:'900',color:'#193B35'},sub:{color:'#66756F',marginBottom:15},card:{backgroundColor:'white',padding:14,borderRadius:12,marginVertical:6,flexDirection:'row',alignItems:'center'},name:{fontWeight:'800',fontSize:16,color:'#193B35'},meta:{color:'#6A7972',marginTop:4},remove:{color:'#A43C34',fontWeight:'900',padding:8},empty:{backgroundColor:'white',padding:18,borderRadius:12,color:'#68756F'}});
