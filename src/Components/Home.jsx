import React from 'react'
import '../Styles/Home.css'
import SearchBar from './SearchBar'

const Home = () => {
    return (
        <div id='home'>
            <div id='container-home'>
                <h1 className='text-3xl font-bold'>What's your <span className='text-orange-700'>ingredient</span>?</h1>
                <SearchBar />
            </div>
        </div>
    )
}

export default Home