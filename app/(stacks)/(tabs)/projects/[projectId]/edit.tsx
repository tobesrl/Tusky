import { editProject, getProject } from "@/api/queries";
import { Project } from "@/api/types";
import { ProjectForm } from "@/components/Projects";
import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const EditProject: React.FC = () => {
  const [project, setProject] = React.useState<Project>();

  const { projectId } = useLocalSearchParams<{
    projectId: string;
  }>();

  const fetchProject = React.useCallback(() => {
    if (projectId !== undefined) {
      getProject(projectId).then(setProject);
    }
  }, [projectId]);

  React.useEffect(() => fetchProject, [projectId]);

  const onSubmit = React.useCallback(
    (item: Project | undefined) => {
      if (item) {
        editProject(item);
      }
    },
    [project]
  );

  return (
    <>
      <ThemedText type="title">Edit project</ThemedText>
      <ProjectForm initialValue={project} onSubmit={onSubmit} />
    </>
  );
};

export default EditProject;
