import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Options from './Components/Options'

function App() {
    return (
        <div id='app'>
            <Navbar />
            <div id='contents'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/options/:ingredient' element={<Options />} />
                </Routes>
            </div>
        </div>
    )
}

export default App