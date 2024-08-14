import { StyleSheet, FlatList } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { FlashList } from "@shopify/flash-list";
import { FontAwesome } from "@expo/vector-icons";
import ListItem from "./listItem";

interface AutoCompeleteProps {
  text: string;
  animatedHeightStyle: any;
  setSearchText: (text: string) => void;
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const AutoCompelete: React.FC<AutoCompeleteProps> = ({
  text,
  animatedHeightStyle,
  setSearchText,
}) => {
  return (
    <Animated.View style={[styles.autoCompelteContainer, animatedHeightStyle]}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ListItem title={item.title} setSearchText={setSearchText} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Animated.View>
  );
};

export default AutoCompelete;

const styles = StyleSheet.create({
  autoCompelteContainer: {
    width: "100%",
    backgroundColor: "#d3d3d3",
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 1,
    flexShrink: 0,
    flexGrow: 0,
    position: "absolute",
    top: 60,
    left: 10,
  },
});
