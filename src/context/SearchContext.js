import React, { useState } from 'react'

export const SearchContext = React.createContext([])

export const SearchProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([])

  return (
    <SearchContext.Provider value={{ searchResult, setSearchResult }}>
      {children}
    </SearchContext.Provider>
  )
}
