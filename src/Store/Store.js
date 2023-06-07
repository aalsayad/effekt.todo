import { create } from 'zustand';

const useStore = create((set, get) => ({
  tasks: [
    {
      id: 1,
      heading: 'Create the UI Design',
      description: 'Use figma to create the UI design of the mobile app after researching other designs',
      priority: 'Low Prio',
      completed: false,
    },
    {
      id: 2,
      heading: 'Develop the code using ReactJS',
      description: 'Use Tailwindcss instead of normal CSS to learn',
      priority: 'Urgent',
      completed: false,
    },
    {
      id: 3,
      heading: 'Write script for video',
      description: 'Insert idea and video script in Notion Database. Come up with title and thumbnail',
      priority: 'High Prio',
      completed: true,
    },
  ],
  updateTasks: (id) => {
    const tasks = get().tasks;
    const newTasks = tasks.map((task) => {
      if (id === task.id && !task.completed) {
        return {
          ...task,
          completed: true,
        };
      } else if (id === task.id && task.completed) {
        return {
          ...task,
          completed: false,
        };
      } else {
        return task;
      }
    });
    set(() => ({
      tasks: newTasks,
    }));
  },
}));

export default useStore;
