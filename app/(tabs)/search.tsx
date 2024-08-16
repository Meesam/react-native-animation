import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useIsFocused } from "@react-navigation/native";
import FloatingButton from "@/components/floatingButton";

const Search = () => {
  const buttonPosition = useSharedValue(-900);
  const isFocused = useIsFocused();

  const floatingButtonStyle = useAnimatedStyle(() => {
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
      <FloatingButton buttonStyle={floatingButtonStyle} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
