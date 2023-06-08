import { create } from 'zustand';

const useStore = create((set, get) => ({
  tasks: [
    {
      id: 1,
      heading: 'Create the UI Design',
      description: 'Use figma to create the UI design of the mobile app after researching other designs',
      priority: 'Low Prio',
      completed: false,
      createdAt: new Date('2020-01-01T00:00:00'),
      completedAt: null,
    },
    {
      id: 2,
      heading: 'Develop the code using ReactJS',
      description: 'Use Tailwindcss instead of normal CSS to learn',
      priority: 'Urgent',
      completed: false,
      createdAt: new Date('2021-01-01T00:00:00'),
      completedAt: null,
    },
    {
      id: 3,
      heading: 'Write script for video',
      description: 'Insert idea and video script in Notion Database. Come up with title and thumbnail',
      priority: 'High Prio',
      completed: true,
      createdAt: new Date('2022-01-01T00:00:00'),
      completedAt: null,
    },
  ],
  updateTasks: (id) => {
    const tasks = get().tasks;
    const newTasks = tasks.map((task) => {
      if (id === task.id && !task.completed) {
        return {
          ...task,
          completed: true,
          completedAt: new Date(),
        };
      } else if (id === task.id && task.completed) {
        return {
          ...task,
          completed: false,
          completedAt: null,
          createdAt: new Date(),
        };
      } else {
        return task;
      }
    });
    console.log(newTasks);
    set(() => ({
      tasks: newTasks,
    }));
  },
  addTask: (task) => {
    const tasks = get().tasks;
    const newTasks = [...tasks];
    const payloadTask = { ...task, id: tasks.length + 1, createdAt: new Date() };
    newTasks.push(payloadTask);
    console.log(newTasks);

    set(() => ({
      tasks: newTasks,
    }));
  },
  deleteTask: (id) => {
    const tasks = get().tasks;
    const newTasks = tasks.filter((task) => task.id !== id);
    set(() => ({
      tasks: newTasks,
    }));
  },
}));

export default useStore;
