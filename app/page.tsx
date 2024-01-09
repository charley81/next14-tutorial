import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">Homepage</h1>
      <Link href="/about" className="text-2xl">
        to about
      </Link>
    </div>
  )
}
