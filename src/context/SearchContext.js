import React, { useState } from 'react'

export const SearchContext = React.createContext([])

export const SearchProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([])
  const [searchText, setSearchText] = useState('')

  return (
    <SearchContext.Provider
      value={{
        result: [searchResult, setSearchResult],
        text: [searchText, setSearchText],
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
