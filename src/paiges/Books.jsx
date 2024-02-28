import { useQuery } from 'react-query'
import { getBook } from '../apiBook/apiBook'
import Book from '../ui/Book'
import Spinner from '../ui/Spinner'

function Books({ query }) {
  const {
    data: books,
    error,
    isLoading,
  } = useQuery(['books', query], () => getBook(query), {
    enabled: !!query, // This ensures the query runs only if query is not empty
  })

  if (error) return <div>An error occurred: {error.message}</div>

  if (isLoading) return <Spinner />

  return (
    <>
      <div className="flex justify-center items-center text-3xl font-bold text-gray-800 mt-8">
        {books?.totalItems > 0 ? (
          <p>Founded {books?.totalItems}</p>
        ) : (
          <div id="wrapper" className="mt-8">
            <div id="container">
              <h1>Start looking for an author or a book</h1>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {books?.items.map((book) => (
          <Book book={book} key={book.id} query={query} />
        ))}
      </div>
    </>
  )
}

export default Books
