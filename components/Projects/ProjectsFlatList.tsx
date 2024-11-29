import { Project } from "@/api/types";
import React from "react";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  View,
  type FlatListProps,
} from "react-native";
import { ThemedText } from "../ThemedText";

type ProjectFlatListProps = Omit<FlatListProps<Project>, "renderItem"> & {
  onPressItem: (item: Project) => void;
};

export const ProjectsFlatList: React.FC<ProjectFlatListProps> = ({
  data,
  onPressItem,
  ...props
}) => {
  const renderProjects: ListRenderItem<Project> = ({ item }) => (
    <TouchableOpacity onPress={() => onPressItem(item)} style={style.item}>
      <ThemedText>{item.title}</ThemedText>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      contentContainerStyle={style.content}
      style={style.wrapper}
      renderItem={renderProjects}
      numColumns={3}
      columnWrapperStyle={{ gap: 20 }}
      {...props}
    />
  );
};

const style = StyleSheet.create({
  wrapper: {},
  content: {
    gap: 20,
    flexWrap: "nowrap",
  },
  item: {
    flex: 1,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
