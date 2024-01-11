'use client'
import { deleteTask } from '@/utils/actions'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button className="btn btn-xs btn-error" disabled={pending}>
      {pending ? 'pending...' : 'delete'}
    </button>
  )
}

export default function DeleteForm({ id }: { id: string }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  )
}
