function BucketSections() {
  return (
    <div className='flex gap-4 border-b-[var(--border)] border-b-[1px] mb-6'>
      <h3 className='cursor-pointer py-1 px-2 border-b-[1px] border-b-[transparent] text-[15px] text-[var(--inactive)]'>
        Overview
      </h3>
      <h3 className='cursor-pointer py-1 px-2 border-b-[1px] border-b-[var(--yellow)] text-[15px]'>Tasks</h3>
    </div>
  );
}

export default BucketSections;
