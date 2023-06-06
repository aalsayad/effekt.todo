export default function BucketContent() {
  return (
    <>
      <div className='flex gap-4 border-b-[var(--border)] border-b-[1px] mb-6'>
        <h3 className='cursor-pointer py-1 px-2 border-b-[1px] border-b-[transparent] text-sm text-[var(--inactive)]'>
          Overview
        </h3>
        <h3 className='cursor-pointer py-1 px-2 border-b-[1px] border-b-[var(--yellow)] text-sm'>Tasks</h3>
      </div>
      <div>
        <button>Add new task +</button>
      </div>
    </>
  );
}
