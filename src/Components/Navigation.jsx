import chevron from '../assets/chevron-left.svg';
function Navigation() {
  return (
    <>
      <div className='mb-4'>
        <div className='flex gap-1  text-[#525460] [&>p]:text-sm [&>p]:transition [&>p]:duration-300 [&>p]:cursor-pointer'>
          <p className='hover:text-[#F1F1F485]'>Ideas</p>
          <span>/</span>
          <p className='hover:text-[#F1F1F485]'>Long-Form Content</p>
          <span>/</span>
          <p className='hover:text-[#F1F1F485]'>YouTube</p>
        </div>
      </div>
      <div className='flex gap-4 mb-10'>
        <div className='w-8 h-8 bg-[#ffffff05] rounded-md flex items-center justify-center cursor-pointer'>
          <img src={chevron} alt='' />
        </div>
        <div>
          <h1 className=' text-[21px]'>Framer Motion Tutorial</h1>
          <h2 className='text-xs opacity-50 font-[NacelleLight]'>Bucket created on June 6 2023</h2>
        </div>
      </div>
    </>
  );
}

export default Navigation;
