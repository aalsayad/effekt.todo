import NewTask from './NewTask';
import TasksStatusGroup from './TasksStatusGroup';

export default function BucketContent() {
  const taskStatusGroups = [
    { id: 1, status: 'Pending' },
    { id: 2, status: 'Done' },
  ];
  return (
    <>
      <NewTask />
      {taskStatusGroups.map((taskGroup) => {
        return <TasksStatusGroup key={taskGroup.id} status={taskGroup.status} />;
      })}
    </>
  );
}
