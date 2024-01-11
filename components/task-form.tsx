import { createTask } from '@/utils/actions'
import { revalidatePath } from 'next/cache'

export default function TaskForm() {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          placeholder="type here"
          name="content"
          required
          className="input input-bordered join-item w-full"
        />
        <button type="submit" className="btn btn-primary join-item">
          create task
        </button>
      </div>
    </form>
  )
}
