import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

interface ListItemProps {
  title: string;
  setSearchText: (text: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ title, setSearchText }) => {
  const handlePress = (text: string) => {
    setSearchText(text);
  };

  return (
    <View style={styles.item}>
      <FontAwesome name="search" color={"gray"} size={15} />

      <Pressable onPress={() => handlePress(title)}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 16,
  },
});
