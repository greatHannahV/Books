import { useQuery } from 'react-query'
import { getBook } from '../apiBook/apiBook'
import Book from '../ui/Book'
import Spinner from '../ui/Spinner'
import styled from 'styled-components'
const Main = styled.div`
  color: var(--color-text);
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;
  font-weight: bold;
`
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
      <Main>
        {books?.totalItems > 0 ? (
          `Founded ${books?.totalItems}`
        ) : (
          <div id="wrapper">
            <div id="container">
              <h1>Start looking for an author or a book</h1>
            </div>
          </div>
        )}{' '}
      </Main>
      {books?.items.map((book) => (
        <Book book={book} key={book.id} query={query} />
      ))}
    </>
  )
}

export default Books
