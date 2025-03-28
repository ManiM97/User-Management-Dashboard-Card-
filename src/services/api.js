// Fetching the data from the api

export const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok){
        throw new Error('Failed to fetch users')
    }
    return response.json()
}