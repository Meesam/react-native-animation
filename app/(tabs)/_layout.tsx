import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import TopHeader from "@/components/topHeader";
import SearchHeader from "@/components/searchHeader";

const TabLayout = () => {
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
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: (props) => {
            const color = props.focused ? "violet" : "gray";
            return <FontAwesome name="search" size={25} color={color} />;
          },
          header: () => {
            return <SearchHeader />;
          },
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
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
