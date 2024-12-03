import { Picker, PickerProps } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, ViewProps } from "react-native";

const ThemedPicker: React.FC<PickerProps> = ({ style, ...props }) => {
  return (
    <Picker
      style={StyleSheet.compose(
        {
          backgroundColor: "#111",
          padding: 5,
          borderRadius: 5,
          borderColor: "rgba(51,51,51,1)",
          color: "rgb(236, 237, 238)",
        },
        style
      )}
      {...props}
    />
  );
};

export default ThemedPicker;
