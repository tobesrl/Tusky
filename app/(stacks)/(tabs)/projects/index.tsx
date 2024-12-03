import { deleteProject, getProjects } from "@/api/queries";
import { Project } from "@/api/types";
import { ProjectsFlatList } from "@/components/Projects";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Alert, Platform, StyleSheet } from "react-native";

const ProjectListScreen: React.FC = () => {
  const nav = useRouter();
  const [projects, setProjects] = React.useState<Project[]>([]);

  const getProj = React.useCallback(() => {
    getProjects().then(setProjects);
  }, []);

  React.useEffect(getProj, []);

  const navToProjectDetail = (item: Project) => {
    nav.navigate(`/(stacks)/(tabs)/projects/${item.id}`);
  };

  const navToProjectEdit = (item: Project) => {
    nav.navigate(`/(stacks)/(tabs)/projects/${item.id}/edit`);
  };

  const onDeleteProject = (item: Project) => {
    deleteProject(item)
      .then((resp) => {
        if (resp) {
          getProj();
        } else {
          console.warn("Error: Eliminazione progetto non avvenuta");
        }
      })
      .catch(console.error);
  };

  const confirmAndDelete = (item: Project) => {
    switch (Platform.OS) {
      case "web":
        if (confirm(`Sicuro di eliminare il progetto ${item.title}?`)) {
          onDeleteProject(item);
        }
        break;
      default:
        console.log("Native alert missing");
        break;
    }
  };

  return (
    <>
      <ThemedView style={style.titleView}>
        <ThemedText type="title">Projects</ThemedText>
        <Link
          href={"/(stacks)/(tabs)/projects/create"}
          style={style.titleViewButton}
        >
          <Ionicons name="add-sharp" size={20} color={"white"} />
          <ThemedText>Project</ThemedText>
        </Link>
      </ThemedView>
      <ProjectsFlatList
        data={projects}
        onPressItem={navToProjectDetail}
        onPressEditItem={navToProjectEdit}
        onPressDeleteItem={confirmAndDelete}
      />
    </>
  );
};

export default ProjectListScreen;

const style = StyleSheet.create({
  titleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleViewButton: {
    display: "flex",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
});
