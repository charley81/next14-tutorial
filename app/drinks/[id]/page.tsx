import Link from 'next/link'
import Image from 'next/image'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getSingleDrink = async (id: string) => {
  const res = await fetch(`${url}${id}`)
  if (!res.ok) throw new Error('Failed to fetch a drink...')
  return res.json()
}

export default async function SingleDrinkPage({ params }) {
  console.log(params)
  const data = await getSingleDrink(params.id)
  const title = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-4 mb-6">
        Back to drinks
      </Link>
      <Image
        src={imgSrc}
        alt={title}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
      />
      <h1>{title}</h1>
    </div>
  )
}
