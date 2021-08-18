import axios from 'axios'
import RAWG_KEY from '../../key'

const fetchData = async (path, keyChar) => {
  if (path && keyChar) {
    try {
      const data = await axios.get(
        `https://api.rawg.io/api/${path}${keyChar}key=${RAWG_KEY}`
      )
      return data.data
    } catch (err) {
      console.error(err)
    }
  } else if (path && !keyChar) {
    try {
      const data = await axios.get(path)
      return data.data
    } catch (err) {
      console.error(err)
    }
  } else {
    console.error('cannot trigger API request: no path or keyChar provided')
  }
}

export default fetchData
