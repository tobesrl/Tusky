import { baseUrl } from "@/api/configs";
import { Project } from "@/api/types";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Slot } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React from "react";

export default function ProjectIdStack() {
  const { projectId } = useLocalSearchParams();

  const [project, setProject] = React.useState<Project>();

  const getPro = React.useCallback(() => {
    fetch(`${baseUrl}/projects/${projectId}`).then((r) =>
      r.json().then(setProject)
    );
  }, [baseUrl, projectId]);

  React.useEffect(getPro, [projectId]);

  return (
    <ThemedView style={{ gap: 35 }}>
      <ThemedView>
        <ThemedText type="title">{project?.title}</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>{project?.description}</ThemedText>
      </ThemedView>
      <Slot />
    </ThemedView>
  );
}
