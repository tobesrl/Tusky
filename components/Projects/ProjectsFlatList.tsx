import { Project } from "@/api/types";
import React from "react";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
  type FlatListProps,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { Ionicons } from "@expo/vector-icons";

type ProjectFlatListProps = Omit<FlatListProps<Project>, "renderItem"> & {
  onPressItem: (item: Project) => void;
  onPressEditItem: (item: Project) => void;
  onPressDeleteItem: (item: Project) => void;
};

export const ProjectsFlatList: React.FC<ProjectFlatListProps> = ({
  data,
  onPressItem,
  onPressEditItem,
  onPressDeleteItem,
  ...props
}) => {
  const renderProjects: ListRenderItem<Project> = ({ item }) => (
    <TouchableOpacity onPress={() => onPressItem(item)} style={style.item}>
      <View style={{ gap: 10, flex: 1 }}>
        <ThemedText type="subtitle" numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </ThemedText>
        {item.tasks && item.tasks.length > 0 && (
          <ThemedText type="default">Tasks: {item.tasks.length}</ThemedText>
        )}
      </View>
      <View style={style.actions}>
        <TouchableOpacity onPress={() => onPressEditItem(item)}>
          <ThemedText>
            <Ionicons name="pencil-outline" size={20} />
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressDeleteItem(item)}>
          <ThemedText>
            <Ionicons name="trash-outline" size={20} />
          </ThemedText>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const { width } = useWindowDimensions();

  const numColumns = React.useMemo(() => {
    const minColumnWidth = 300;

    var columns = Math.floor(width / minColumnWidth);

    if (data && columns > data!.length) {
      columns = data!.length;
    }

    columns = Math.max(columns, 1);

    return Math.min(columns, 5); // al minimo, 1 colonna
  }, [width, data]);

  return (
    <FlatList
      data={data}
      contentContainerStyle={style.content}
      style={style.wrapper}
      key={numColumns}
      windowSize={10}
      keyExtractor={(item) => `projects#${item.id}`}
      renderItem={renderProjects}
      numColumns={numColumns}
      columnWrapperStyle={numColumns !== 1 ? { gap: 20 } : undefined}
      {...props}
    />
  );
};

const style = StyleSheet.create({
  wrapper: {},
  content: {
    gap: 20,
    flexWrap: "wrap",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
});
