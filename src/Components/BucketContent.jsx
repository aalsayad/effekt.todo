import arrowBottom from '../assets/arrow-bottom.svg';
import Task from './Task.jsx';
import NewTask from './NewTask';
import useStore from '../Store/Store.js';

export default function BucketContent() {
  const tasks = useStore((state) => state.tasks);

  return (
    <>
      <div className='flex gap-4 border-b-[var(--border)] border-b-[1px] mb-6'>
        <h3 className='cursor-pointer py-1 px-2 border-b-[1px] border-b-[transparent] text-[15px] text-[var(--inactive)]'>
          Overview
        </h3>
        <h3 className='cursor-pointer py-1 px-2 border-b-[1px] border-b-[var(--yellow)] text-[15px]'>Tasks</h3>
      </div>
      <NewTask />

      <div className='flex flex-col gap-2'>
        <p className='flex items-center text-xs gap-1'>
          Pending <img src={arrowBottom} className='w-2 opacity-30' />
        </p>
        {tasks.map((task) => {
          if (!task.completed) {
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
          }
        })}
      </div>
      <div className='flex flex-col gap-2 mt-10'>
        <p className='flex items-center text-xs gap-1'>
          Done <img src={arrowBottom} className='w-2 opacity-30' />
        </p>
        {tasks.map((task) => {
          if (task.completed) {
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
          }
        })}
      </div>
    </>
  );
}
