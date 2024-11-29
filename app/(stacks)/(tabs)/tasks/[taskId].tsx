import { baseUrl } from "@/api/configs";
import { Task } from "@/api/types";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const TaskDetailScreen: React.FC = () => {
  const { id } = useLocalSearchParams();
  const [task, setTask] = React.useState<Task>();

  const getTask = () => {
    fetch(`${baseUrl}/tasks/${id}`).then((r) => r.json().then(setTask));
  };

  React.useEffect(() => {
    getTask();
  }, [id]);

  return (
    <>
      <ThemedView>
        <ThemedText type="subtitle">{task?.title}</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>Stato: </ThemedText>
        <ThemedText>{task?.completed ? "Finito" : "Da fare"}</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="subtitle">{task?.description}</ThemedText>
      </ThemedView>
    </>
  );
};

export default TaskDetailScreen;
