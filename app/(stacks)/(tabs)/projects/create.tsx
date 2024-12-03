import { createProject } from "@/api/queries";
import { Project } from "@/api/types";
import { ProjectForm } from "@/components/Projects";
import { ThemedText } from "@/components/ThemedText";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const InputGroup: React.FC<React.PropsWithChildren> = (props) => {
  return <View style={style.group} {...props} />;
};

const ProjectCreateTask: React.FC = () => {
  const nav = useRouter();

  const onSubmit = React.useCallback((item: Project | undefined) => {
    if (item) {
      createProject(item).then((r) => {
        if (r) {
          // !! createProject(item).then();
          return nav.back();
        }
        console.warn("Creazione non avvenuta");
      });
    }
  }, []);

  return (
    <>
      <ThemedText type="title">Create project</ThemedText>
      <ProjectForm initialValue={undefined} onSubmit={onSubmit} />
    </>
  );
};

export default ProjectCreateTask;

const style = StyleSheet.create({
  group: {
    gap: 10,
  },
  button: {
    backgroundColor: "rgb(78,80,212)",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
});
