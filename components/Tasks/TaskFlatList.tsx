import { Task } from "@/api/types";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
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

type TaskFlatListProps = Omit<FlatListProps<Task>, "renderItem"> & {
  onPressItem: (item: Task) => void;
  createNewItem: () => void;
};

const Separator: React.FC = () => <View style={style.separator} />;

export const TaskFlatList: React.FC<TaskFlatListProps> = ({
  data,
  onPressItem,
  createNewItem,
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
      <View style={{ position: "absolute", right: 10 }}>
        <ThemedText>
          <Ionicons name="pencil-outline" size={20} />
        </ThemedText>
      </View>
    </TouchableOpacity>
  );

  const header = () => (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity style={style.header} onPress={createNewItem}>
        <ThemedText>
          <FontAwesome name="plus-square" size={20} />
        </ThemedText>
        <ThemedText>Add new task</ThemedText>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderProjects}
      style={style.wrapper}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={style.content}
      ListHeaderComponent={header}
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
  header: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center",
    gap: 15,
    justifyContent: "center",
    flexDirection: "row",
  },
});
