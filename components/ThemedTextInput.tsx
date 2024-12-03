import {
  Text,
  type TextProps,
  StyleSheet,
  TextInputProps,
  TextInput,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedTextInputProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <TextInput style={[{ color }, styles.input, style]} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
