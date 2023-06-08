import arrowBottom from '../assets/arrow-bottom.svg';
import Task from './Task.jsx';
import React, { useEffect, useState } from 'react';
import useStore from '../Store/Store';
import { AnimatePresence, motion } from 'framer-motion';

function TasksStatusGroup({ status }) {
  const tasks = useStore((state) => state.tasks);
  const [localTasks, setLocalTasks] = useState(tasks);

  console.log('Rerendered');
  //Fetch tasks from local store and sort them
  useEffect(() => {
    if (status === 'Done') {
      const fetchedTasks = tasks.filter((task) => task.completed);
      const sortedTasks = fetchedTasks.sort((a, b) => b.completedAt - a.completedAt);
      setLocalTasks(sortedTasks);
    } else {
      const fetchedTasks = tasks.filter((task) => !task.completed);
      const sortedTasks = fetchedTasks.sort((a, b) => b.createdAt - a.createdAt);
      setLocalTasks(sortedTasks);
    }
  }, [tasks]);

  return (
    <>
      <div className='flex flex-col gap-2 mt-10'>
        <p className='flex items-center text-xs gap-1'>
          {status} <img src={arrowBottom} className='w-2 opacity-30' />
        </p>
        <AnimatePresence initial={false}>
          {localTasks.map((task) => {
            return (
              <motion.div
                key={task.id}
                initial={{ height: 0, y: 10, opacity: 0 }}
                animate={{
                  height: 'auto',
                  y: 0,
                  opacity: 1,
                }}
                exit={{ height: 0, y: 10, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.5, stiffness: 90, opacity: { duration: 0.2 } }}
              >
                <Task
                  className='overflow-hidden'
                  id={task.id}
                  heading={task.heading}
                  description={task.description}
                  priority={task.priority}
                  completed={task.completed}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
}

export default TasksStatusGroup;
