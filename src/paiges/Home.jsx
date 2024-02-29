// import { useQuery } from 'react-query'
// import { fetchAuthorBiography } from '../apiBook/apiBook'
// import Spinner from '../ui/Spinner'
// import styled from 'styled-components'

import { useQuery } from 'react-query'
import { fetchAuthorBiography } from '../apiBook/apiBook'

import Loading from '../ui/Loading'

function Dashboard({ query, onQuery }) {
  let {
    data: authorBiographyData,
    isLoading,
    error,
  } = useQuery(['authorBiography', query], () => fetchAuthorBiography(query), {
    enabled: !!query,
  })

  if (isLoading) return <Loading />
  if (error) return <div>An error occurred: {error.message}</div>

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
