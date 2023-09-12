
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Headers/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([])

  const [readingTime,setReadingTime]=useState(0)

  const handleAddToBookmark=blog=>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks)
  }
  const handleMarkRead=time=>{
    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
     
    <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkRead={handleMarkRead}></Blogs>
      <Bookmarks bookmarks={bookmarks}
      readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
