import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'

const createTask = async formData => {
  'use server'

  const content = formData.get('content')
  await prisma.task.create({
    data: {
      content
    }
  })
  revalidatePath('/tasks')
}

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
