import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Slot, usePathname, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function ProjectsLayout() {
  const nav = useRouter();
  const path = usePathname();

  const canGoBack = React.useCallback(() => nav.canGoBack(), [path]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <View style={{ height: 250, zIndex: 39 }}>
          <FontAwesome6
            size={310}
            color="#808080"
            name="diagram-project"
            style={styles.headerImage}
          />
          <View
            style={{
              borderBottomColor: "#333",
              borderBottomWidth: 1,
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingVertical: 15,
              paddingHorizontal: 20,
              bottom: 0,
              left: 0,
              right: 0,
              position: "absolute",
              zIndex: 38948,
            }}
          >
            {canGoBack() && (
              <TouchableOpacity
                onPress={() => nav.back()}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  borderWidth: 1,
                  borderColor: "#fff",
                  backgroundColor: "#333",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                }}
              >
                <Ionicons name="arrow-back" size={14} color={"white"} />
                <ThemedText>Back</ThemedText>
              </TouchableOpacity>
            )}
          </View>
        </View>
      }
    >
      <Slot />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
