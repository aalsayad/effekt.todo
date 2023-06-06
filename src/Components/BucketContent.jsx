import arrowBottom from '../assets/arrow-bottom.svg';

export default function BucketContent() {
  return (
    <>
      <div className='flex gap-4 border-b-[var(--border)] border-b-[1px] mb-6'>
        <h3 className='cursor-pointer py-1 px-2 border-b-[1px] border-b-[transparent] text-sm text-[var(--inactive)]'>
          Overview
        </h3>
        <h3 className='cursor-pointer py-1 px-2 border-b-[1px] border-b-[var(--yellow)] text-sm'>Tasks</h3>
      </div>
      <div className='mb-6'>
        <button className='flex items-center text-sm py-2 px-5 rounded-[4px] bg-[var(--light-navy)] hover:bg-[var(--light-navy-active)] transition ease-in-out duration-[0.3s]'>
          Add new task <span className='text-lg ml-2'>+</span>
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='flex items-center text-xs gap-1'>
          Pending <img src={arrowBottom} className='w-2 opacity-30' />
        </p>
        <div className='flex items-start gap-4 py-5 px-4 pb-6 w-full min-h-[50px] bg-[var(--light-navy)] rounded-md'>
          <div className='cursor-pointer mt-1 min-w-[16px] min-h-[16px] bg-[#2F313C] rounded-[3px]'></div>
          <div>
            <div className='mb-4'>
              <h4 className='text-base mb-1'>Create the UI Design</h4>
              <p className='text-sm opacity-[0.75] font-light'>
                Use figma to create the UI design of the mobile app after researching other designs
              </p>
            </div>
            <span className=' px-[12px] py-[6px] text-xs text-[#CEEC79] bg-[#29302C] rounded-full'>Low Prio</span>
          </div>
        </div>
      </div>
    </>
  );
}
