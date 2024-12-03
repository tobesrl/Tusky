import { Project } from "@/api/types";
import React from "react";
import { ThemedView } from "../ThemedView";
import InputGroup from "../InputGroup";
import { ThemedText } from "../ThemedText";
import { ThemedTextInput } from "../ThemedTextInput";
import { StyleSheet, TouchableOpacity } from "react-native";

type ProjectFormProps = {
  initialValue: Project | undefined;
  onSubmit: (item: Project | undefined) => void;
};

export const ProjectForm: React.FC<ProjectFormProps> = ({
  initialValue,
  onSubmit,
}) => {
  const [project, setProject] = React.useState<Project>();

  React.useEffect(() => {
    setProject(initialValue);
  }, [initialValue]);

  const setTitle = (newValue: string) => {
    setProject((p) => {
      if (p) {
        return { ...p, title: newValue };
      }
      return { title: newValue } as Project;
    });
  };

  const setDescription = (newValue: string) => {
    setProject((p) => {
      if (p) {
        return { ...p, description: newValue };
      }
      return { description: newValue } as Project;
    });
  };

  return (
    <>
      <ThemedView style={{ gap: 20 }}>
        <InputGroup>
          <ThemedText>Title: </ThemedText>
          <ThemedTextInput
            value={project?.title ?? initialValue?.title ?? ""}
            onChangeText={setTitle}
          />
        </InputGroup>
        <InputGroup>
          <ThemedText>Description: </ThemedText>
          <ThemedTextInput
            value={project?.description ?? initialValue?.description ?? ""}
            onChangeText={setDescription}
          />
        </InputGroup>
        <TouchableOpacity
          onPress={() => onSubmit(project)}
          style={style.button}
        >
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
