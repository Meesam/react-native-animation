import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";

interface FloatingButtonProps {
  buttonStyle: {
    bottom: number;
    opacity: number;
  };
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ buttonStyle }) => {
  return (
    <Animated.View style={[styles.floatingButton, buttonStyle]}>
      <Pressable>
        <Text style={styles.buttonText}>Click</Text>
      </Pressable>
    </Animated.View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
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
