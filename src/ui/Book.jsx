import { useNavigate } from 'react-router-dom'

function Book({ book, query }) {
  const navigate = useNavigate()

  const imageLinks = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks
    : {
        thumbnail:
          'https://media.istockphoto.com/id/183382838/photo/antique-leather-book-cover.jpg?s=612x612&w=0&k=20&c=unp4609MLB8yelXXMdNf5wAHEuXs2aknTR4UNfO0EhE=',
      }
  const imageUrl =
    imageLinks.thumbnail || imageLinks.smallThumbnail || 'fallback-image-url'
  if (query === undefined) navigate('/dashboard')
  return (
    <div className="text-center bg-[#f5f3f0] py-10 px-6 my-4 mx-auto w-[60%] border border-gray-600 flex justify-around shadow-md">
      <div className=" w-[30%] overflow-hidden">
        <img
          src={imageUrl}
          alt="Book Cover"
          className="w-60 h-80 object-cover"
        />
      </div>
      <div className="w-[70%] text-left px-9 ">
        <h2 className="text-color-text text-4xl  font-bold mb-6">
          {book.volumeInfo.title}
        </h2>
        <p className="text-color-p text-xl font-semibold mb-4">
          The published date is {book.volumeInfo.publishedDate}
        </p>
        <p className="text-color-p text-xl font-semibold mb-4">
          Pages in the book {book.volumeInfo.pageCount}
        </p>
        <br />
        <a
          href={book.volumeInfo.previewLink}
          target="_blank"
          rel="noreferrer"
          className="text-links hover:underline block mb-2"
        >
          A preview link is here
        </a>
        <br />
        <a
          href={book.volumeInfo.infoLink}
          target="_blank"
          rel="noreferrer"
          className="text-links hover:underline block"
        >
          Read the book
        </a>
      </div>
    </div>
  )
}

export default Book
