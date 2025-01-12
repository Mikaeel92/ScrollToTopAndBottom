import React from 'react'
import UseFetch from './UseFetch'

const App = () => {

  const {data} = UseFetch('https://dummyjson.com/products?limit=100')

  return (
    <div className='flex flex-col gap-2 items-center'>
    <h1 className='text-2xl font-bold'>Scroll To Top And Bottom Feature</h1>
    <p className='font-bold text-green-700'>This is the top section</p>
    <button onClick={handleScrollToBottom} className='bg-gray-700 rounded-md p-2 text-white'>Scroll To Bottom</button>

    <button onClick={handleScrollToTop} className='bg-gray-700 rounded-md p-2 text-white'>Scroll To Top</button>
    <div ref={}></div>
    <p className='font-bold text-red-700'>This is the bottom of the page</p>
    </div>
  )
}

export default App