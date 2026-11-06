import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../types';
export default function MenuCard({ item, onPress, actionLabel, onAction }: { item: MenuItem; onPress?: () => void; actionLabel?: string; onAction?: () => void }) {
  const Body = (
    <View style={styles.card}>
      <View style={{flex:1}}>
        <Text style={styles.course}>{item.course.toUpperCase()}</Text>
        <Text style={styles.name}>{item.dishName}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Text style={styles.price}>R {item.price.toFixed(2)}</Text>
      {actionLabel && <Text onPress={onAction} style={styles.action}>{actionLabel}</Text>}
    </View>
  );
  return Body;
}
const styles=StyleSheet.create({card:{backgroundColor:'#FFFFFF',borderRadius:14,padding:15,marginVertical:7,borderWidth:1,borderColor:'#E2E9E5'},course:{fontSize:11,letterSpacing:1.2,color:'#7B8E86',fontWeight:'800'},name:{fontSize:18,fontWeight:'800',color:'#193B35',marginTop:4},description:{fontSize:13,color:'#596A63',marginTop:5},price:{fontSize:17,fontWeight:'800',color:'#B16B35',marginTop:8},action:{color:'#A43C34',fontWeight:'800',marginTop:10}});
