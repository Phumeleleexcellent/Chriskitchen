import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { Course, MenuItem } from '../types';
import { setMenuSnapshot } from '../utils/menuUtils';

type MenuContextValue = {
  menuItems: MenuItem[];
  addMenuItem: (dishName: string, description: string, course: Course, priceText: string) => boolean;
  removeMenuItem: (id: string) => void;
};
const MenuContext = createContext<MenuContextValue | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  useEffect(() => { setMenuSnapshot(menuItems); }, [menuItems]);

  const addMenuItem = (dishName: string, description: string, course: Course, priceText: string) => {
    const name = dishName.trim();
    const detail = description.trim();
    const price = Number(priceText);
    if (!name || !detail || !priceText.trim()) {
      Alert.alert('Missing information', 'Complete the dish name, description, course and price.');
      return false;
    }
    if (!Number.isFinite(price) || price <= 0) {
      Alert.alert('Invalid price', 'Enter a valid price greater than zero.');
      return false;
    }
    const item: MenuItem = { id: `${Date.now()}-${Math.random()}`, dishName: name, description: detail, course, price };
    setMenuItems((previous) => [...previous, item]);
    Alert.alert('Added to menu', `${name} was saved in the menu list.`);
    return true;
  };

  const removeMenuItem = (id: string) => {
    Alert.alert('Remove menu item', 'Are you sure you want to remove this item?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Remove', style: 'destructive', onPress: () => setMenuItems((previous) => previous.filter((item) => item.id !== id)) },
    ]);
  };

  const value = useMemo(() => ({ menuItems, addMenuItem, removeMenuItem }), [menuItems]);
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) throw new Error('useMenu must be used inside MenuProvider');
  return context;
}
