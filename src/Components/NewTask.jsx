import { useState } from 'react';
function NewTask() {
  const [taskModal, setTaskModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: null,
    completed: false,
  });

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
              value={formData.title}
              name='title'
              onChange={(e) => handleInput(e)}
              placeholder='Task Title'
              className='bg-[#1F2028] border-[1px] border-transparent focus:outline-none focus:border-[#363844] focus:border-[1px] text-sm  py-3 px-4 rounded-md placeholder:text-[#F1F1F435]'
            ></input>
            <textarea
              value={formData.description}
              name='description'
              onChange={(e) => handleInput(e)}
              placeholder='Task Description'
              className='bg-[#1F2028] border-[1px] border-transparent focus:outline-none focus:border-[#363844] focus:border-[1px] text-sm opacity-[0.75] font-light  py-3 px-4 rounded-md placeholder:text-[#F1F1F435]'
            ></textarea>
            <div className='mt-1 mb-6 flex items-center gap-2 [&>div]:text-[#919296] [&>div]:cursor-pointer [&>div]:text-[13px] [&>div]:bg-[#292A32] [&>div]:py-[6px] [&>div]:px-[10px] [&>div]:rounded-full'>
              <div>Low Prio</div>
              <div>High Prio</div>
              <div>Urgent</div>
            </div>
            <div className='flex items-center justify-end gap-4'>
              <button
                onClick={handleCancel}
                className='p-0 text-[13px] underline underline-offset-2 opacity-50 hover:opacity-100 transition duration-300'
              >
                Cancel
              </button>
              <button className='flex items-center text-sm py-[6px] px-4 rounded-[4px] bg-[#282933] hover:bg-[#31333F] transition ease-in-out duration-[0.3s]'>
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
