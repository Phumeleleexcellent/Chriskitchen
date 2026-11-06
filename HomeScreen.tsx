import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useMenu } from '../context/MenuContext';
import { getCourseSummaries } from '../utils/menuUtils';
import MenuCard from '../components/MenuCard';
import ActionButton from '../components/ActionButton';
type Props = NativeStackScreenProps<RootStackParamList,'Home'>;
export default function HomeScreen({ navigation }: Props) {
  const { menuItems } = useMenu();
  const summaries = getCourseSummaries(menuItems);
  return <ScrollView style={s.page} contentContainerStyle={s.content}>
    <Text style={s.brand}>CHRISTOFFEL'S</Text><Text style={s.title}>Digital Menu</Text>
    <Text style={s.sub}>A complete view of the chef's prepared menu.</Text>
    <View style={s.count}><Text style={s.countLabel}>TOTAL MENU ITEMS</Text><Text style={s.countNum}>{menuItems.length}</Text></View>
    <Text style={s.heading}>Average price by course</Text>
    <View style={s.row}>{summaries.map((x)=><View key={x.course} style={s.stat}><Text style={s.statCourse}>{x.course}</Text><Text style={s.statPrice}>{x.itemCount ? `R ${x.averagePrice.toFixed(2)}` : '—'}</Text><Text style={s.statCount}>{x.itemCount} item(s)</Text></View>)}</View>
    <Text style={s.heading}>Complete menu</Text>
    {menuItems.length === 0 ? <Text style={s.empty}>No dishes yet. Use “Add menu item” to create the menu.</Text> :
      menuItems.map((item)=><MenuCard key={item.id} item={item} onPress={()=>navigation.navigate('Details',{itemId:item.id})}/>)}
    <ActionButton title="Add menu item" onPress={()=>navigation.navigate('AddItem')}/>
    <ActionButton title="Manage menu / remove items" secondary onPress={()=>navigation.navigate('ManageMenu')}/>
    <ActionButton title="Guest view: filter by course" secondary onPress={()=>navigation.navigate('GuestMenu')}/>
  </ScrollView>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#F4F6F2'},content:{padding:18,paddingBottom:35},brand:{color:'#B16B35',fontWeight:'900',letterSpacing:2,fontSize:13},title:{fontSize:32,fontWeight:'900',color:'#193B35',marginTop:4},sub:{color:'#66756F',marginTop:4,marginBottom:18},count:{backgroundColor:'#193B35',borderRadius:16,padding:17,marginBottom:18},countLabel:{color:'#D7E6DF',fontSize:11,fontWeight:'800',letterSpacing:1},countNum:{color:'white',fontSize:38,fontWeight:'900',marginTop:2},heading:{fontSize:19,fontWeight:'900',color:'#193B35',marginTop:12,marginBottom:8},row:{flexDirection:'row',gap:7},stat:{flex:1,backgroundColor:'#E7EFEC',borderRadius:12,padding:10},statCourse:{fontWeight:'800',fontSize:11,color:'#526A61'},statPrice:{fontWeight:'900',fontSize:15,color:'#193B35',marginTop:7},statCount:{fontSize:10,color:'#65766E',marginTop:3},empty:{padding:18,color:'#6B7771',backgroundColor:'white',borderRadius:12}});
