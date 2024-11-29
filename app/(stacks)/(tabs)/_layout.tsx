import { FontAwesome6, FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const iconSize = 20;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              name="diagram-project"
              size={iconSize}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="tasks" size={iconSize} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
