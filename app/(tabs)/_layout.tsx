import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
    const {colors} = useTheme();
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle:{
            backgroundColor: colors.surface,
            borderTopWidth: 2,
            borderTopColor: colors.border,
            height:90,
            paddingBottom:30,
            paddingTop:10,
        },
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:600,
        },
        headerShown:false
    }}>
        <Tabs.Screen
            name='index'
            options={{
                title:"Todos",
                tabBarIcon: ({color, size, focused})=> (
                    // <Ionicons name='flash-outline' size={size} color={color} focused={focused}/>
                    <FontAwesome5 name="tasks" size={size} color={color} focused={focused} />
                )
            }}
        />
         <Tabs.Screen
            name='settings'
            options={{
                title:"Settings",
                tabBarIcon: ({color, size, focused})=> (
                    <Ionicons name='settings' size={size} color={color} focused={focused}/>
                )
            }}
        />
    </Tabs>
  )
}

export default TabsLayout