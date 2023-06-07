import useStore from '../Store/Store';
import bin from '../assets/bin.svg';

function Task({ id, heading, description, priority, completed }) {
  const updateTasks = useStore((state) => state.updateTasks);
  const deleteTask = useStore((state) => state.deleteTask);
  const handleCheckboxClick = () => {
    updateTasks(id);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteTask(id);
  };

  return (
    <div className='relative flex items-start gap-4 p-4 px-5 pb-5 w-full min-h-[50px] bg-[var(--light-navy)] rounded-lg'>
      <div
        onClick={handleCheckboxClick}
        className='flex items-center justify-center cursor-pointer mt-1 min-w-[20px] min-h-[20px] bg-[#2F313C] rounded-[3px]'
      >
        {completed && (
          <svg width='9' height='8' viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 4.6L3.4 7L7.9 1' stroke='#E7C057' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        )}
      </div>
      <div>
        <div className={` ${completed && 'line-through opacity-20'}`}>
          <h4 className={`text-base mb-1 `}>{heading}</h4>
          <p className='text-sm opacity-[0.75] font-light'>{description}</p>
        </div>
        {priority || completed ? (
          <span
            className={`${
              !completed
                ? `${priority == 'Low Prio' ? 'text-[#CEEC79] bg-[#29302C]' : ''}
              ${priority == 'High Prio' ? 'text-[#798BEC] bg-[#2F2F37]' : ''}
              ${priority == 'Urgent' ? 'text-[#EC9B79] bg-[#302929]' : ''}`
                : 'text-[#E7C057] bg-[#302F29]'
            } px-[12px] py-[6px] text-xs rounded-full mt-3 flex items-center justify-center w-[fit-content]`}
          >
            {!completed ? priority : 'Completed'}
          </span>
        ) : null}
      </div>
      {completed && (
        <button
          onClick={(e) => handleDelete(e)}
          className=' absolute right-3 top-3 min-h-[23px] min-w-[23px] bg-[#2F313C] flex items-center justify-center rounded-[3px] opacity-40 hover:opacity-100 transition duration-300 ease-in-out'
        >
          <img src={bin} alt='delete task' className='min-h-[13px]' />
        </button>
      )}
    </div>
  );
}

export default Task;
