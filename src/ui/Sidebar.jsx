import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { fetchAuthorBiography, getBook } from '../apiBook/apiBook'

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #d6cec2;
  padding: 1rem 1.5rem;
`
const NavList = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;
  gap: 0.8rem;
`

const Input = styled.input`
  width: 20rem;
  font-family: inherit;
  background-color: inherit;
  border: 1px solid gray;
  border-radius: 5rem;
  margin: 0.2rem 1rem;
  padding: 0.5rem;
  text-align: center;
`
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: #64605a;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }
  &:active,
  &.active:link,
  &.active:visited {
    color: #64605b;
    background-color: #f5f3f0;
    border-radius: 1px;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #64605b;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #7e7871;
  }
`
function Sidebar({ query, onQuery }) {
  function handleSubmit(e) {
    e.preventDefault()
    getBook(query)
    fetchAuthorBiography(query)
  }

  return (
    <Nav>
      <NavList>
        <li>
          <StyledNavLink to="/home">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/books">Books</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/information">Information</StyledNavLink>
        </li>
      </NavList>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search a book"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
        />
      </form>
    </Nav>
  )
}

export default Sidebar
