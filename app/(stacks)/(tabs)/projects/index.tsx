import { baseUrl } from "@/api/configs";
import { Project } from "@/api/types";
import { ProjectsFlatList } from "@/components/Projects";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import React from "react";

const ProjectListScreen: React.FC = () => {
  const nav = useRouter();
  const [projects, setProjects] = React.useState<Project[]>([]);

  const getProjects = () => {
    fetch(`${baseUrl}/projects`).then((res) => res.json().then(setProjects));
  };

  React.useEffect(() => {
    getProjects();
  }, []);

  const navToProject = (item: Project) => {
    nav.navigate(`/(stacks)/(tabs)/projects/${item.id}`);
  };

  return (
    <>
      <ThemedView>
        <ThemedText type="title">Projects</ThemedText>
      </ThemedView>
      <ProjectsFlatList data={projects} onPressItem={navToProject} />
    </>
  );
};

export default ProjectListScreen;
