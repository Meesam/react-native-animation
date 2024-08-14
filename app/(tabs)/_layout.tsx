import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs, usePathname } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import TopHeader from "@/components/topHeader";

const TabLayout = () => {
  const pathName = usePathname();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: (props) => {
            const color = props.focused ? "violet" : "gray";
            return <FontAwesome name="home" size={25} color={color} />;
          },
          header: () => {
            return <TopHeader />;
          },
        }}
        initialParams={{
          pathName: pathName,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: (props) => {
            const color = props.focused ? "violet" : "gray";
            return <FontAwesome name="search" size={25} color={color} />;
          },
        }}
        initialParams={{
          pathName: pathName,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: (props) => {
            const color = props.focused ? "violet" : "gray";
            return <FontAwesome name="user" size={25} color={color} />;
          },
        }}
        initialParams={{
          pathName: pathName,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
