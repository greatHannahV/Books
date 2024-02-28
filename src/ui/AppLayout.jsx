import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function AppLayout({ query, onQuery }) {
  return (
    <div>
      <Sidebar query={query} onQuery={onQuery} />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
