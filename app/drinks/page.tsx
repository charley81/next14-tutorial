import DrinkList from '@/components/drink-list'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrinks = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const res = await fetch(url)

  // throw error
  if (!res.ok) {
    throw new Error('Failed to fetch drinks')
  }

  const data = await res.json()
  return data
}

export default async function DrinksPage() {
  const data = await fetchDrinks()

  return (
    <div>
      <h1 className="text-7xl">DrinksPage</h1>
      <DrinkList drinks={data.drinks} />
    </div>
  )
}
