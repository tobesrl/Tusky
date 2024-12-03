import React from "react";
import { StyleSheet, ViewProps } from "react-native";
import { ThemedView } from "./ThemedView";

const ThemedCard: React.FC<ViewProps> = ({ style, ...props }) => {
  return (
    <ThemedView
      style={StyleSheet.compose(
        {
          borderWidth: 2,
          borderRadius: 5,
          gap: 15,
          padding: 15,
          borderColor: "rgba(51,51,51,1)",
          shadowColor: "#212121",
          shadowOffset: {
            width: -5,
            height: 2,
          },
        },
        style
      )}
      {...props}
    />
  );
};

export default ThemedCard;
