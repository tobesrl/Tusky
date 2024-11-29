import { baseUrl } from "@/api/configs";
import { Task } from "@/api/types";
import { TaskFlatList } from "@/components/Tasks";
import { useRouter } from "expo-router";
import React from "react";

const TasksListScreen: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const getTasks = () => {
    fetch(`${baseUrl}/tasks`).then((res) => res.json().then(setTasks));
  };

  React.useEffect(() => {
    getTasks();
  }, []);

  const nav = useRouter();

  const onPressItem = (item: Task) => {
    nav.push(`/(stacks)/(tabs)/tasks/${item.id}`);
  };

  return <TaskFlatList data={tasks} onPressItem={onPressItem} />;
};

export default TasksListScreen;
