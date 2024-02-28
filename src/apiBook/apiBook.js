export const URL = `https://www.googleapis.com/books/v1`

export async function getBook(query) {
  if (query === '' || !query) return
  try {
    const queryUrl = `${URL}/volumes?q=${query}`
    const response = await fetch(queryUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
// Fetching Data from Wikipedia
export async function fetchAuthorBiography(query) {
  const endpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
    query,
  )}`

  try {
    const response = await fetch(endpoint)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch data from Wikipedia:', error)
    return null
  }
}
