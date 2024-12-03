import { ColorSpace } from "react-native-reanimated";
import { baseUrl } from "./configs";
import { Project, Task } from "./types";

// ? Projects
export const getProjects = async () => {
  try {
    const res = await fetch(`${baseUrl}/projects`);

    if (!res.ok) {
      throw new Error(`Errore nel recupero dei progetti: ${res.status}`);
    }
    const tasks = await getTasks();

    const data: Project[] = await res.json();

    return data.map((item) => ({
      tasks: tasks.filter((t) => t.projectId === item.id),
      ...item,
    }));
  } catch (e) {
    throw new Error(`Rotto: ${e}`);
  }
};

export const createProject = async (item: Project) => {
  try {
    return fetch(`${baseUrl}/projects`, {
      method: "POST",
      body: JSON.stringify(item),
    }).then((r) => r.ok);
  } catch (error) {
    throw new Error(`Errore durante la creazione ${error}`);
  }
};

export const getProject = async (projectId: string) => {
  try {
    const res = await fetch(`${baseUrl}/projects/${projectId}`);

    if (!res.ok) {
      throw new Error(`Errore nel recupero dei progetti: ${res.status}`);
    }
    const tasks = await getTasks();

    const data: Project = await res.json();

    data.tasks = tasks.filter((t) => t.projectId === data.id);

    return data;
  } catch (e) {
    throw new Error(`Rotto: ${e}`);
  }
};

export const editProject = async (item: Project) => {
  try {
    fetch(`${baseUrl}/projects/${item.id}`, {
      method: "PATCH",
      body: JSON.stringify(item),
    }).then(console.log);
  } catch (error) {
    throw new Error(`Errore durante la creazione ${error}`);
  }
};

export const deleteProject = async (item: Project) => {
  try {
    const resp = await fetch(`${baseUrl}/projects/${item.id}`, {
      method: "DELETE",
    });

    return resp.ok;
  } catch (e) {
    console.error(`Eliminazione progetto non riuscita, ${e}`);
    return false;
  }
};

// ? Tasks

export const getTasks = async () => {
  try {
    const res = await fetch(`${baseUrl}/tasks`);

    if (!res.ok) {
      throw new Error(`Errore nel recupero dei progetti: ${res.status}`);
    }

    const data: Task[] = await res.json();

    return data;
  } catch (e) {
    throw new Error(`Rotto: ${e}`);
  }
};

export const createTask = async (item: Task) => {
  try {
    const resp = await fetch(`${baseUrl}/tasks`, {
      method: "POST",
      body: JSON.stringify(item),
    });
    return resp.ok;
  } catch (error) {
    throw new Error(`Errore durante la creazione ${error}`);
  }
};

export const editTask = async (item: Task) => {
  try {
    const resp = await fetch(`${baseUrl}/tasks/${item.id}`, {
      method: "PATCH",
      body: JSON.stringify(item),
    });

    const data = await resp.json();

    return data;
  } catch (e) {
    console.error(`Errore durante la modifica di task: ${e}`);
  }
};

export const deleteTask = async (item: Task) => {
  throw new Error("Method not implemented");
};
