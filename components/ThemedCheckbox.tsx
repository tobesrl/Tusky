import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

type ThemedCheckboxProps = {
  checked: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  buttonStyle?: any;
  activeButtonStyle?: any;
  inactiveButtonStyle?: any;
  activeIconProps?: any;
  inactiveIconProps?: any;
};

const ThemedCheckbox: React.FC<ThemedCheckboxProps> = ({
  checked,
  onChange,
  buttonStyle = {},
  activeButtonStyle = {},
  inactiveButtonStyle = {},
  activeIconProps = {},
  inactiveIconProps = {},
}) => {
  const iconProps = checked ? activeIconProps : inactiveIconProps;

  const checkboxStyle = React.useMemo(
    () =>
      StyleSheet.compose(
        styles.checkboxBase,
        checked ? styles.checkboxChecked : undefined
      ),
    []
  );

  return (
    <Pressable
      role="checkbox"
      aria-checked={checked}
      style={styles.checkboxBase}
      onPress={() => onChange(!checked)}
    >
      {checked && (
        <Ionicons name="checkmark" size={24} color="white" {...iconProps} />
      )}
    </Pressable>
  );
};

export default ThemedCheckbox;

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "rgba(51,51,51,1)",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "coral",
  },
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: "500",
    fontSize: 18,
  },
});
