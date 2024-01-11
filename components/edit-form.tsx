'use client'
import { editTask } from '@/utils/actions'

export default function EditForm({ task }) {
  const { id, completed, content } = task

  return (
    <form action={editTask}>
      <input type="hidden" name="id" value={id} />
      {/* content */}
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />
      {/* completed */}
      <div className="form-control m-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button className="btn btn-primary" type="submit">
        edit
      </button>
    </form>
  )
}
