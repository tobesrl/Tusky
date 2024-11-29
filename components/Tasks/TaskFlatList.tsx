import { Task } from "@/api/types";
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
import { ThemedView } from "../ThemedView";
import { Collapsible } from "../Collapsible";
import { Ionicons } from "@expo/vector-icons";

type TaskFlatListProps = Omit<FlatListProps<Task>, "renderItem"> & {
  onPressItem: (item: Task) => void;
};

const Separator: React.FC = () => <View style={style.separator} />;

export const TaskFlatList: React.FC<TaskFlatListProps> = ({
  data,
  onPressItem,
  ...props
}) => {
  const renderProjects: ListRenderItem<Task> = ({ item }) => (
    <TouchableOpacity onPress={() => onPressItem(item)} style={style.item}>
      <ThemedText>
        <Ionicons
          name={item.completed ? "checkbox-outline" : "square-outline"}
          size={20}
        />
      </ThemedText>
      <ThemedText>{item.title}</ThemedText>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderProjects}
      style={style.wrapper}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={style.content}
      {...props}
    />
  );
};

const style = StyleSheet.create({
  wrapper: {},
  content: {
    gap: 10,
  },
  item: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#222",
  },
});
