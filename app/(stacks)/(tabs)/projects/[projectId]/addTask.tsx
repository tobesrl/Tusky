import { createTask, getProject } from "@/api/queries";
import { Project, Task } from "@/api/types";
import { TaskForm } from "@/components/Tasks";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";

const AddTask: React.FC = () => {
  const [project, setProject] = React.useState<Project>();
  const { projectId } = useLocalSearchParams<{
    projectId: string;
  }>();

  const nav = useRouter();

  const submit = (item: Task | undefined) => {
    if (item) {
      createTask({ ...item, projectId }).then((r) => {
        if (r) {
          return nav.back();
        }
        console.warn("Problemi durante la creazione della task");
      });
    }
  };

  const fetchProject = React.useCallback(() => {
    getProject(projectId).then(setProject);
  }, [projectId]);

  React.useEffect(fetchProject, [projectId]);

  return (
    <ThemedView>
      <ThemedText type="title">New task for {project?.title}</ThemedText>
      <TaskForm
        forProject={projectId}
        initialValue={{ projectId } as Task}
        onSubmit={submit}
      />
    </ThemedView>
  );
};

export default AddTask;
