import { baseUrl } from "@/api/configs";
import { Task } from "@/api/types";
import { TaskForm } from "@/components/Tasks";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

const CreateTask: React.FC = () => {
  const [task] = React.useState<Task>();

  const createTask = (task: Task) => {
    fetch(`${baseUrl}/tasks`, {
      method: "POST",
      body: JSON.stringify(task),
    })
      .then((r) => r.json().then(console.log))
      .catch(console.error);
  };

  const submit = React.useCallback(() => {
    if (task) {
      createTask(task);
    }
  }, [task]);

  return (
    <>
      <ThemedView>
        <ThemedText type="title">Crea Task</ThemedText>
      </ThemedView>
      <TaskForm initialValue={task} onSubmit={submit} />
    </>
  );
};

export default CreateTask;
