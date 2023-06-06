import svg from '../assets/effekt-todo-logo.svg';
import defaultPic from '../assets/sayad.jpeg';

function Header() {
  return (
    <>
      <div className='rounded-full bg-[#E7C057] h-[300px] w-[240px] absolute -left-[55%] top-[12%] blur-[50px] opacity-10'></div>
      <div className='flex justify-between mb-10'>
        <img src={svg} alt='effekt.todo' />
        <div className='flex items-center gap-6'>
          <div
            style={{
              backgroundImage: `url(${defaultPic})`,
            }}
            alt='effekt.todo'
            className='w-9 h-9 bg-cover rounded-full'
          />
          <div className='flex flex-col gap-1 px-1 cursor-pointer'>
            <div className='w-[3px] h-[3px] bg-white rounded-full'></div>
            <div className='w-[3px] h-[3px] bg-white rounded-full'></div>
            <div className='w-[3px] h-[3px] bg-white rounded-full'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
