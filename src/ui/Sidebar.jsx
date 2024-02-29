import { NavLink } from 'react-router-dom'

import { fetchAuthorBiography, getBook } from '../apiBook/apiBook'

function Sidebar({ query, onQuery }) {
  function handleSubmit(e) {
    e.preventDefault()
    getBook(query)
    fetchAuthorBiography(query)
  }

  return (
    <div className="flex justify-between items-center bg-[#d6cec2] py-4 px-6">
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? 'flex px-5 items-center gap-3 text-xl font-semibold text-gray-900 bg-[#f5f3f0] rounded px-4 py-2 hover:text-gray-900 transition duration-300'
                : 'flex px-5 items-center gap-3 text-xl font-semibold text-gray-700 hover:text-gray-900 transition duration-300'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive
                ? 'flex px-5 items-center gap-3 text-xl font-semibold text-gray-900 bg-[#f5f3f0] rounded px-4 py-2 hover:text-gray-900 transition duration-300'
                : 'flex px-5 items-center gap-3 text-xl font-semibold text-gray-700 hover:text-gray-900 transition duration-300'
            }
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/information"
            className={({ isActive }) =>
              isActive
                ? 'flex px-5 items-center gap-3 text-xl font-semibold text-gray-900 bg-[#f5f3f0] rounded px-4 py-2 hover:text-gray-900 transition duration-300'
                : 'flex px-5 items-center gap-3 text-xl font-semibold text-gray-700 hover:text-gray-900 transition duration-300'
            }
          >
            Information
          </NavLink>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-72 bg-transparent border border-gray-400 rounded-full py-2 px-4 placeholder-gray-500 focus:outline-none"
          placeholder="Search a book"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Sidebar
