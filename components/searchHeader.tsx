import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import AutoCompelete from "./autoCompelete";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const SearchHeader = () => {
  const [searchText, setSearchText] = React.useState("");
  const heightAnimatedValue = useSharedValue(0);
  const animatedFlexValue = useSharedValue(0);
  const [searchClick, setSearchClick] = React.useState(false);

  const animatedHeightStyle = useAnimatedStyle(() => {
    return {
      height: heightAnimatedValue.value,
    };
  });

  const animatedFlexStyle = useAnimatedStyle(() => {
    return {
      flex: animatedFlexValue.value,
    };
  });

  const animatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animatedFlexValue.value, [0, 1], [0, 1]),
    };
  });

  const handleTextChange = (text: string) => {
    if (text != "" && text.length >= 3) {
      heightAnimatedValue.value = withTiming(300, { duration: 500 });
      setSearchText(text);
    } else {
      heightAnimatedValue.value = withTiming(0, { duration: 500 });
      setSearchText(text);
    }
  };

  const handleSearch = () => {
    animatedFlexValue.value = withTiming(searchClick ? 0 : 1, {
      duration: 500,
    });
    setSearchClick(!searchClick);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerPanel}>
          <Image
            source={require("@/assets/images/avatar.jpg")}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
            }}
          />
          <Animated.View style={[styles.searchPanel, animatedFlexStyle]}>
            <Pressable onPress={handleSearch}>
              <FontAwesome name="search" size={20} color="gray" />
            </Pressable>

            <Animated.View style={[animatedOpacityStyle]}>
              <TextInput
                style={styles.searchText}
                placeholder="Search..."
                onChangeText={handleTextChange}
                value={searchText}
              />
            </Animated.View>

            {searchText !== "" && (
              <Pressable
                onPress={() => handleTextChange("")}
                style={{ marginLeft: "auto" }}
              >
                <FontAwesome
                  name="close"
                  size={15}
                  color="gray"
                  style={{ marginLeft: "auto" }}
                />
              </Pressable>
            )}
          </Animated.View>

          <FontAwesome
            name="bell"
            color="violet"
            size={25}
            style={{ marginLeft: 5 }}
          />
        </View>
        <AutoCompelete
          text={searchText}
          animatedHeightStyle={animatedHeightStyle}
          setSearchText={setSearchText}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    zIndex: 0,
  },
  headerPanel: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  searchPanel: {
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    //marginLeft: "auto",
  },

  searchText: {
    fontSize: 16,
    marginLeft: 10,
    width: "100%",
  },
});
