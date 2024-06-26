import axios from 'axios'

const API_URL:string = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

export const fetchUser = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
  } catch (error) {
    throw new Error('Error fetching data')
  }
}