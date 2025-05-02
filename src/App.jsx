import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'

export default function App() {
  let [language, setLanguage] = useState('hi')
  let [search, setSearch] = useState('')
  function getLanguage(input) {
    setLanguage(input)

  }
  let getSearch = (input) => {
    setSearch(input)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar getLanguage={getLanguage} getSearch={getSearch} />
        <Routes>
          <Route path="/" element={<Home q={search ? search :  "All"} language={language} />} />
          <Route path="/all" element={<Home q={search ? search :  "All"} language={language} />} />
          <Route path="/world" element={<Home q={search ? search :  "World"} language={language} />} />
          <Route path="/politics" element={<Home q={search ? search :  "Politics"} language={language} />} />
          <Route path="/crime" element={<Home q={search ? search :  "Crime"} language={language} />} />
          <Route path="/education" element={<Home q={search ? search :  "Education"} language={language} />} />
          <Route path="/science" element={<Home q={search ? search :  "Science"} language={language} />} />
          <Route path="/technology" element={<Home q={search ? search :  "Technology"} language={language} />} />
          <Route path="/sports" element={<Home q={search ? search :  "Sports"} language={language} />} />
          <Route path="/entertainment" element={<Home q={search ? search :  "Entertainment"} language={language} />} />
          <Route path="/economics" element={<Home q={search ? search :  "Economics"} language={language} />} />
          <Route path="/india" element={<Home q={search ? search :  "India"} language={language} />} />
          <Route path="/cricket" element={<Home q={search ? search :  "Cricket"} language={language} />} />
          <Route path="/chess" element={<Home q={search ? search :  "Chess"} language={language} />} />
          <Route path="/jokes" element={<Home q={search ? search :  "Jokes"} language={language} />} />
          <Route path="/mahakumbh" element={<Home q={search ? search :  "Mahakumbh"} language={language} />} />


        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}
