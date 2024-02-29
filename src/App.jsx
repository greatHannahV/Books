import { QueryClient, QueryClientProvider } from 'react-query'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './paiges/Home'
import Books from './paiges/Books'
import Information from './paiges/Information'
import PageNotFound from './ui/PageNotFound'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
})
function App() {
  const [query, setQuery] = useState('')

  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route element={<AppLayout query={query} onQuery={setQuery} />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route
              path="/home"
              element={<Home query={query} onQuery={setQuery} />}
            />
            <Route
              path="/books"
              element={<Books query={query} onQuery={setQuery} />}
            />
            <Route path="/information" element={<Information />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  )
}

export default App
