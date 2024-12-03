import { baseUrl } from "@/api/configs";
import { Task } from "@/api/types";
import { TaskFlatList } from "@/components/Tasks";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";

const ProjectDetailScreen: React.FC = () => {
  const nav = useRouter();
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const { projectId } = useLocalSearchParams();

  const getTasks = () => {
    if (projectId) {
      fetch(`${baseUrl}/tasks/?projectId=${projectId}`).then((r) =>
        r.json().then(setTasks)
      );
    }
  };

  const navToTask = (item: Task) => {
    nav.push(`/(stacks)/(tabs)/projects/${projectId}/tasks/${item.id}`);
  };

  React.useEffect(() => {
    getTasks();
  }, [projectId]);

  if (!projectId) {
    return (
      <ThemedView>
        <ThemedText>Carico detail...</ThemedText>
      </ThemedView>
    );
  }

  const navToNewTask = () => {
    nav.push(`/(stacks)/(tabs)/projects/${projectId}/addTask`);
  };

  return (
    <>
      <ThemedView>
        <ThemedText>ToDo List</ThemedText>
      </ThemedView>
      <ThemedView>
        <TaskFlatList
          data={tasks}
          onPressItem={navToTask}
          createNewItem={navToNewTask}
        />
      </ThemedView>
    </>
  );
};

export default ProjectDetailScreen;
