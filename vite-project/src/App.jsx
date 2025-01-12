import React from 'react'
import UseFetch from './UseFetch'

const App = () => {

  const {data} = UseFetch('https://dummyjson.com/products?limit=100')

  return (
    <div>App</div>
  )
}

export default App