import Link from 'next/link'
import Image from 'next/image'

export default function DrinkList({ drinks }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map(drink => (
        <li>
          <Link href={`/drinks/${drink.idDrink}`}>
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                className="object-cover rounded-md"
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  )
}
