import arrowBottom from '../assets/arrow-bottom.svg';
import Task from './Task.jsx';
import React, { useEffect, useState } from 'react';
import useStore from '../Store/Store';

function TasksStatusGroup({ status }) {
  const tasks = useStore((state) => state.tasks);
  const [taskGroupVisibility, setTaskGroupVisibility] = useState(true);
  const [localTasks, setLocalTasks] = useState(tasks);

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
    console.log(localTasks, '--from Component---', status);
  }, [tasks]);

  //Hide whole component if there are no local group tasks
  useEffect(() => {
    if (localTasks.length === 0) {
      setTaskGroupVisibility(false);
    } else {
      setTaskGroupVisibility(true);
    }
  }, [localTasks]);

  return (
    <>
      {taskGroupVisibility && (
        <div className='flex flex-col gap-2 mt-10'>
          <p className='flex items-center text-xs gap-1'>
            {status} <img src={arrowBottom} className='w-2 opacity-30' />
          </p>

          {localTasks.map((task) => {
            return (
              <Task
                id={task.id}
                key={task.id}
                heading={task.heading}
                description={task.description}
                priority={task.priority}
                completed={task.completed}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default TasksStatusGroup;
