'use client'

import { useState } from 'react'

export default function ClientPage() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{counter}</h1>
      <button
        className="btn btn-primary text-2xl"
        onClick={() => setCounter(counter + 1)}
      >
        add
      </button>
    </div>
  )
}
