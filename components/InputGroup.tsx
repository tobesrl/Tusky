import React from "react";
import { StyleSheet, View } from "react-native";

const InputGroup: React.FC<React.PropsWithChildren> = (props) => (
  <View style={style.group} {...props} />
);

export default InputGroup;

const style = StyleSheet.create({
  group: {
    gap: 10,
  },
});
