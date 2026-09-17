import React from 'react'

const Fetch =  async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

const FetchData = async () => {
   const data = await Fetch()
   console.log("first,",data)
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default FetchData