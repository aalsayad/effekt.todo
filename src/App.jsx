import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import TasksComponent from './Components/TasksComponent';
import BucketSections from './Components/BucketSections';

function App() {
  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='max-w-[400px] w-screen min-h-screen py-8 px-6 overflow-hidden'>
          <Header />
          <Navigation />
          <BucketSections />
          <TasksComponent />
        </div>
      </div>
    </>
  );
}

export default App;
