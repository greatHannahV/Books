import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Body = styled.div`
  text-align: center;
  background-color: #f5f3f0;
  padding: 2.5rem;
  margin: 1rem auto;
  width: 70%;
  border: 1px #999 solid;
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const H2 = styled.h2`
  color:var(--color-text)
  margin-bottom: 2rem;

  line-height:30px

`
const RigthDiv = styled.div`
  align-self: center;
  text-align: center;
  width: 75%;
  padding: 0 2rem;
`
const LeftDiv = styled.div`
  width: 25%;
  position: relative;

  overflow: hidden;
`
const P = styled.p`
  font-size: 2rem;
  color: #1a3008;
  font-weight: bold;
  padding: 1.5rem 0;
`
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 15rem;
  height: 20rem;
  overflow: hidden;
`
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
    <Body>
      <LeftDiv>
        <Img src={imageUrl} alt="Book Cover" />
      </LeftDiv>
      <RigthDiv>
        <H2>{book.volumeInfo.title}</H2>
        <P>The published date is {book.volumeInfo.publishedDate}</P>
        <p>Pages in the book {book.volumeInfo.pageCount}</p>
        <br />
        <a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer">
          A preview link is here
        </a>
        <br />
        <a href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer">
          Read the book
        </a>
      </RigthDiv>
    </Body>
  )
}

export default Book
