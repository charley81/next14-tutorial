import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1 className="text-7xl mb-8 font-bold">Homepage</h1>
      <Link href="/client" className="btn btn-accent text-2xl">
        get started
      </Link>
    </div>
  )
}
