import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
export default function ActionButton({ title, onPress, secondary = false }: { title: string; onPress: () => void; secondary?: boolean }) {
  return <Pressable accessibilityRole="button" onPress={onPress} style={[styles.button, secondary && styles.secondary]}>
    <Text style={[styles.label, secondary && styles.secondaryLabel]}>{title}</Text>
  </Pressable>;
}
const styles = StyleSheet.create({
  button:{backgroundColor:'#193B35',padding:14,borderRadius:12,alignItems:'center',marginVertical:6},
  secondary:{backgroundColor:'#E7EFEC',borderWidth:1,borderColor:'#B7CBC4'},
  label:{color:'#FFFFFF',fontWeight:'700',fontSize:15},
  secondaryLabel:{color:'#193B35'}
});
