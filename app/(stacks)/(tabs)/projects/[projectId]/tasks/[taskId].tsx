import { baseUrl } from "@/api/configs";
import { Task } from "@/api/types";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const ProjectTaskDetailScreen: React.FC = () => {
  const { taskId } = useLocalSearchParams();
  const [task, setTask] = React.useState<Task>();

  const getTask = React.useCallback(() => {
    fetch(`${baseUrl}/tasks/${taskId}`).then((r) => r.json().then(setTask));
  }, [baseUrl, taskId]);

  React.useEffect(getTask, [taskId]);

  if (!task) {
    return (
      <ThemedView>
        <ThemedText>Carico.taskid..</ThemedText>
      </ThemedView>
    );
  }

  return (
    <>
      <ThemedView>
        <ThemedText type="subtitle">{task.title}</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>
          Stato:
          <ThemedText>{task.completed ? "Finito" : "Da fare"}</ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="subtitle">{task.description}</ThemedText>
      </ThemedView>
    </>
  );
};

export default ProjectTaskDetailScreen;
