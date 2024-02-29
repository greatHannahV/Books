// import { useQuery } from 'react-query'
// import { fetchAuthorBiography } from '../apiBook/apiBook'
// import Spinner from '../ui/Spinner'
// import styled from 'styled-components'

// const Main = styled.div`
//   background-color: var(--color-acsent);
//   width: 65%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem 1rem;
//   margin: 5rem auto;
// `
// const Description = styled.p`
//   font-size: 1.4rem;
//   width: 80%;
//   margin-top: 2rem;
//   text-align: left;
//   padding-bottom: 2rem;
// `
// // const Span = styled.span`
// //   color: var(--color-p);
// //   font-size: 1.4rem;
// // `
// const H1 = styled.h2`
//   color: var(--color-p);
//   padding: 2.1rem 0;
//   text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
//   width: 80%;
//   text-align: center;
// `
// const P = styled.h2`
//   font-size: 1.8rem;
//   width: 70%;

//   text-align: center;
// `
// const IMG = styled.img`
//   width: 100%;
//   max-width: 400px;
//   height: auto;
//   margin-bottom: 1rem;
// `
// function Dashboard({ query, onQuery }) {
//   // const {
//   //   data: books,
//   //   error,
//   //   isLoading,
//   // } = useQuery(['books', 'author', query], () => getBook(query), {
//   //   enabled: !!query,
//   // })
//   // Получение данных о книге
//   // const {
//   //   data: books,
//   //   isLoading,
//   //   error,
//   // } = useQuery(['books', query], () => getBook(query), {
//   //   enabled: !!query,
//   // })

//   // Получение данных о биографии автора
//   const {
//     data: authorBiographyData,
//     isLoading,
//     error,
//   } = useQuery(['authorBiography', query], () => fetchAuthorBiography(query), {
//     enabled: !!query,
//   })

//   if (error) return <div>An error occurred: {error.message}</div>

//   if (isLoading) return <Spinner />

//   if (authorBiographyData === undefined)
//     return (
//       <div id="wrapper">
//         <div id="container">
//           <h1>Start looking for an author or a book</h1>
//         </div>
//       </div>
//     )
//   return (
//     <div>
//       <Main>
//         {authorBiographyData.originalimage && (
//           <IMG
//             src={authorBiographyData.originalimage.source}
//             alt={authorBiographyData.title}
//           />
//         )}
//         <H1>{authorBiographyData?.title}</H1>
//         <P>{authorBiographyData?.description}</P>
//         <Description>
//           {authorBiographyData?.extract ? authorBiographyData?.extract : null}
//         </Description>
//       </Main>
//     </div>
//   )
// }

// export default Dashboard
import { useQuery } from 'react-query'
import { fetchAuthorBiography } from '../apiBook/apiBook'
import Spinner from '../ui/Spinner'

function Dashboard({ query, onQuery }) {
  const {
    data: authorBiographyData,
    isLoading,
    error,
  } = useQuery(['authorBiography', query], () => fetchAuthorBiography(query), {
    enabled: !!query,
  })

  if (error) return <div>An error occurred: {error.message}</div>

  if (isLoading) return <Spinner />

  if (!authorBiographyData || authorBiographyData.type === 'disambiguation') {
    return (
      <div className="text-center">
        <div id="wrapper">
          <div id="container">
            <h1>Start looking for an author</h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <div className="bg-[#f5f3f0] w-3/4 flex flex-col items-center justify-center p-8 my-5">
        {authorBiographyData.originalimage && (
          <img
            src={authorBiographyData.originalimage.source}
            alt={authorBiographyData.title}
            className="w-[420px] h-[500px] mb-4"
          />
        )}
        <h2 className="text-color-p text-4xl font-bold mb-4">
          {authorBiographyData?.title}
        </h2>
        <p className="text-2xl text-color-p text-center mb-4">
          {authorBiographyData?.description}
        </p>
        <p className="text-lg text-color-p text-left mb-4">
          {authorBiographyData?.extract}
        </p>
      </div>
    </div>
  )
}

export default Dashboard
