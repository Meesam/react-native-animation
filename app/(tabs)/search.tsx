import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { useIsFocused } from "@react-navigation/native";

const Search = (props: any) => {
  const buttonPosition = useSharedValue(-900);
  const isFocused = useIsFocused();

  const buttonStyle = useAnimatedStyle(() => {
    return {
      bottom: buttonPosition.value,
      opacity: interpolate(
        buttonPosition.value,
        [-900, -700, -650],
        [0, 0.5, 1],
        {
          extrapolateLeft: Extrapolation.CLAMP,
        }
      ),
    };
  });

  React.useEffect(() => {
    if (!isFocused) {
      buttonPosition.value = -900;
    } else {
      buttonPosition.value = withTiming(-650, { duration: 500 });
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.floatingButton, buttonStyle]}>
        <Pressable>
          <Text style={styles.buttonText}>Click</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  floatingButton: {
    position: "relative",
    left: 150,
    backgroundColor: "#000",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
