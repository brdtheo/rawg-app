import React, { useState } from 'react'

export const HomeContext = React.createContext([])

export const HomeProvider = ({ children }) => {
  const [newReleases, setNewReleases] = useState(null)
  const [bestScore, setBestScore] = useState(null)

  return (
    <HomeContext.Provider
      value={{
        releases: [newReleases, setNewReleases],
        score: [bestScore, setBestScore],
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}
