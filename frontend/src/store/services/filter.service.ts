import axios from 'axios'
import { BASE_URL } from '../../constants'
export const filterCats = async (filterData:any) => {
    const response = await axios.post(`${BASE_URL}/api/cats/filter`, filterData)
    return response.data
}

const filterService = {filterCats}

export default filterService