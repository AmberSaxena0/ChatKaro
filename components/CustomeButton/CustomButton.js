import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  type = "Primary",
  bgcolor,
  fgcolor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgcolor ? { backgroundColor: bgcolor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgcolor ? { color: fgcolor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
  },

  container_Primary: {
    backgroundColor: "#3b71f3",
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_TERTIARY: {
    color: "black",
  },
});

export default CustomButton;
