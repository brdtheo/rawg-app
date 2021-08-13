import React, { useState } from 'react'

export const CarouselContext = React.createContext([])

export const CarouselProvider = ({ children }) => {
  const [newReleasesData, setNewReleases] = useState([])
  const [bestScoreData, setBestScore] = useState([])

  return (
    <CarouselContext.Provider
      value={{
        newReleases: [newReleasesData, setNewReleases],
        bestScore: [bestScoreData, setBestScore],
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}
