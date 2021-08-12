import axios from 'axios'
import RAWG_KEY from '../../key'

const fetchData = async (path) => {
  if (path) {
    try {
      const data = await axios.get(
        `https://api.rawg.io/api/${path}&key=${RAWG_KEY}`
      )
      return data.data
    } catch (err) {
      console.error(err)
    }
  } else {
    console.error('cannot trigger API request: no path provided')
  }
}

export default fetchData
