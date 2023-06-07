import { useState, useRef } from 'react';
import useStore from '../Store/Store';
function NewTask() {
  const addTask = useStore((state) => state.addTask);
  const [taskModal, setTaskModal] = useState(false);
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    priority: null,
    completed: false,
  });

  const lowPrio = useRef(null);
  const highPrio = useRef(null);
  const urgent = useRef(null);

  const handleCancel = (e) => {
    e.preventDefault();
    setTaskModal(false);
  };

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.heading.length > 0 && formData.description.length > 0) addTask(formData);
    setFormData({
      heading: '',
      description: '',
      priority: null,
      completed: false,
    });
    setTaskModal(false);
  };

  const handleTagClick = (ref) => {
    const tag = ref.current.innerHTML;
    if (tag !== formData.priority) {
      setFormData({ ...formData, priority: tag });
    } else {
      setFormData({ ...formData, priority: null });
    }
  };

  return (
    <>
      {!taskModal && (
        <div className='mb-6'>
          <button
            onClick={() => setTaskModal(true)}
            className='flex items-center text-sm py-2 px-5 rounded-[4px] bg-[var(--light-navy)] hover:bg-[var(--light-navy-active)] transition ease-in-out duration-[0.3s]'
          >
            Add new task <span className='text-lg ml-2'>+</span>
          </button>
        </div>
      )}
      {/*Input Fields */}
      {taskModal && (
        <div className='mb-6 flex items-start gap-6 p-4 py-6 w-full min-h-[50px] bg-[var(--light-navy)] rounded-lg'>
          <form className=' w-full flex flex-col gap-[10px]'>
            <input
              value={formData.heading}
              name='heading'
              type='text'
              onChange={(e) => handleInput(e)}
              placeholder='Task Name'
              className='bg-[#1F2028] border-[1px] border-transparent focus:outline-none focus:border-[#363844] focus:border-[1px] text-sm  py-3 px-4 rounded-md placeholder:text-[#F1F1F435]'
            ></input>
            <textarea
              value={formData.description}
              name='description'
              type='text'
              onChange={(e) => handleInput(e)}
              placeholder='What is this task about....'
              className='bg-[#1F2028] border-[1px] border-transparent focus:outline-none focus:border-[#363844] focus:border-[1px] text-sm text-[#f1f1f4d3]  font-light  py-3 px-4 rounded-md placeholder:text-[#F1F1F435]'
            ></textarea>
            <div className='mt-1 mb-6 flex items-center gap-2 [&>div]:cursor-pointer [&>div]:text-[13px]  [&>div]:py-[6px] [&>div]:px-[13px] [&>div]:rounded-full'>
              <div
                onClick={() => handleTagClick(lowPrio)}
                ref={lowPrio}
                className={`${
                  formData.priority === 'Low Prio' ? 'text-[#CEEC79] bg-[#29302C]' : 'text-[#919296] bg-[#292A32]'
                }`}
              >
                Low Prio
              </div>
              <div
                onClick={() => handleTagClick(highPrio)}
                ref={highPrio}
                className={`${
                  formData.priority === 'High Prio' ? 'text-[#798BEC] bg-[#2F2F37]' : 'text-[#919296] bg-[#292A32]'
                }`}
              >
                High Prio
              </div>
              <div
                onClick={() => handleTagClick(urgent)}
                ref={urgent}
                className={`${
                  formData.priority === 'Urgent' ? 'text-[#EC9B79] bg-[#302929]' : 'text-[#919296] bg-[#292A32]'
                }`}
              >
                Urgent
              </div>
            </div>
            <div className='flex items-center justify-end gap-4'>
              <button
                onClick={handleCancel}
                className='p-0 text-[13px] underline underline-offset-2 opacity-50 hover:opacity-100 transition duration-300 font-light'
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className='flex items-center text-sm py-[6px] px-4 rounded-[4px] bg-[#282933] hover:bg-[#31333F] transition ease-in-out duration-[0.3s]'
              >
                Add new task <span className='text-lg ml-2'>+</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default NewTask;
