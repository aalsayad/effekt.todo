import useStore from '../Store/Store';

function Task({ id, heading, description, priority, completed }) {
  const updateTasks = useStore((state) => state.updateTasks);
  const handleCheckboxClick = () => {
    updateTasks(id);
  };

  return (
    <div className='flex items-start gap-4 p-4 px-5 pb-5 w-full min-h-[50px] bg-[var(--light-navy)] rounded-lg'>
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
        <div className={`mb-3 ${completed && 'line-through opacity-20'}`}>
          <h4 className={`text-base mb-1 `}>{heading}</h4>
          <p className='text-sm opacity-[0.75] font-light'>{description}</p>
        </div>
        <span
          className={`px-[12px] py-[6px] text-xs rounded-full
          ${priority == 'Low Prio' && 'text-[#CEEC79] bg-[#29302C]'}
          ${priority == 'High Prio' && 'text-[#798BEC] bg-[#2F2F37]'}
          ${priority == 'Urgent' && 'text-[#EC9B79] bg-[#302929]'}
          ${completed && 'text-[#E7C057] bg-[#302F29]'}
          `}
        >
          {!completed ? priority : 'Completed'}
        </span>
      </div>
    </div>
  );
}

export default Task;
