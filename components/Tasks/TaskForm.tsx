import { baseUrl } from "@/api/configs";
import { getProjects } from "@/api/queries";
import { Project, Task } from "@/api/types";
import ThemedCheckbox from "@/components/ThemedCheckbox";
import ThemedPicker from "@/components/ThemedPicker";
import { ThemedText } from "@/components/ThemedText";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { ThemedView } from "@/components/ThemedView";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import InputGroup from "../InputGroup";

type TaskFromProps = {
  initialValue: Task | undefined;
  onSubmit: (taks: Task | undefined) => void;
  forProject?: string | undefined;
};

export const TaskForm: React.FC<TaskFromProps> = ({
  initialValue,
  forProject,
  onSubmit,
}) => {
  const [task, _setTask] = React.useState<Task | undefined>(initialValue);
  const [projects, setProjects] = React.useState<Project[]>();
  const fetchProjects = React.useCallback(() => {
    if (!forProject) {
      getProjects().then(setProjects);
    }
  }, []);

  React.useEffect(fetchProjects, []);

  const setTask = (prop: keyof Task, value: any) => {
    _setTask((t) => {
      const tmp: any = { ...t };
      tmp[`${prop}`] = value;
      return tmp as Task;
    });
  };

  const [checked, setChecked] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (initialValue && checked !== initialValue.completed) {
      setTask("completed", checked);
    }
  }, [checked, initialValue]);

  return (
    <>
      <ThemedView style={{ gap: 20 }}>
        <InputGroup>
          <ThemedText>Title</ThemedText>
          <ThemedTextInput
            onChangeText={(t) => setTask("title", t)}
            value={task?.title}
          />
        </InputGroup>
        <InputGroup>
          <ThemedText>Description: </ThemedText>
          <ThemedTextInput
            onChangeText={(t) => setTask("description", t)}
            value={task?.description}
          />
        </InputGroup>
        <InputGroup>
          <ThemedText>Complete: </ThemedText>
          <ThemedCheckbox checked={checked} onChange={setChecked} />
        </InputGroup>
        {!forProject && (
          <InputGroup>
            <ThemedText>Project: </ThemedText>
            <ThemedPicker
              selectedValue={task?.projectId}
              onValueChange={(itemValue) => setTask("projectId", itemValue)}
            >
              {projects?.map((p, i) => (
                <Picker.Item
                  key={`projectId_${i}`}
                  label={p.title}
                  value={p.id}
                />
              ))}
            </ThemedPicker>
          </InputGroup>
        )}
        <TouchableOpacity onPress={() => onSubmit(task)} style={style.button}>
          <ThemedText>Submit</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: "rgb(78,80,212)",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
});
