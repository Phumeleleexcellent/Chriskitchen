import React, { useState } from 'react';
import { ScrollView, Text, Pressable, StyleSheet } from 'react-native';
import { CourseFilter } from '../types';
import { COURSES, filterMenuByCourse } from '../utils/menuUtils';
import { useMenu } from '../context/MenuContext';
import MenuCard from '../components/MenuCard';
export default function GuestMenuScreen() {
 const [selected,setSelected]=useState<CourseFilter>('All');
 const {menuItems}=useMenu(); const visible=filterMenuByCourse(menuItems,selected);
 const filters:CourseFilter[]=['All',...COURSES];
 return <ScrollView style={s.page} contentContainerStyle={s.content}><Text style={s.title}>Browse the menu</Text><Text style={s.sub}>Guests can select a course to see matching dishes.</Text>
 {filters.map(f=><Pressable key={f} onPress={()=>setSelected(f)} style={[s.filter,selected===f&&s.active]}><Text style={{color:selected===f?'white':'#193B35',fontWeight:'800'}}>{f==='All'?'All courses':f}</Text></Pressable>)}
 <Text style={s.result}>{visible.length} item(s) shown</Text>
 {visible.length===0?<Text style={s.empty}>No items are available in this course yet.</Text>:visible.map(item=><MenuCard key={item.id} item={item}/>)}
 </ScrollView>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#F4F6F2'},content:{padding:18},title:{fontSize:27,fontWeight:'900',color:'#193B35'},sub:{color:'#66756F',marginBottom:15},filter:{padding:12,borderRadius:10,backgroundColor:'white',marginVertical:4,borderWidth:1,borderColor:'#D6E0DB'},active:{backgroundColor:'#193B35',borderColor:'#193B35'},result:{fontWeight:'800',color:'#526A61',marginTop:12,marginBottom:4},empty:{padding:18,backgroundColor:'white',borderRadius:12,color:'#68756F'}});
