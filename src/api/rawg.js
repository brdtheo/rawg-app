import axios from 'axios'
import apiKeys from '../../key'
const API_KEY = process.env.RAWG_KEY ?? apiKeys.RAWG_KEY

const fetchData = async (path, keyChar) => {
  if (path && keyChar) {
    try {
      const data = await axios.get(
        `https://api.rawg.io/api/${path}${keyChar}key=${API_KEY}`
      )
      return data.data
    } catch (err) {
      console.error(err, API_KEY)
    }
  } else if (path && !keyChar) {
    try {
      const data = await axios.get(path)
      return data.data
    } catch (err) {
      console.error(err, API_KEY)
    }
  } else {
    console.error('cannot trigger API request: no path or keyChar provided')
  }
}

export default fetchData
