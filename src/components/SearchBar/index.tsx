import React from 'react'
import { SearchProps } from '../../types'
import './styles.css'

export const SearchBar = ({ onSearch }: SearchProps) => {
  const [term, setTerm] = React.useState('')

  const handleGetSearchTerm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(term)
  }

  const handleResetClick = () => {
    setTerm('')
    onSearch(term)
  }

  return (
    <form className="dsc-search-bar" onSubmit={(e) => handleGetSearchTerm(e)}>
      <button type="submit">🔎︎</button>
      <input
        type="text"
        placeholder="Nome do produto"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={handleResetClick}>🗙</button>
    </form>
  )
}
