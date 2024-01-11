import TaskFormCustom from '@/components/task-form-custom'
import TaskList from '@/components/task-list'

export default function TasksPage() {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskList />
    </div>
  )
}
