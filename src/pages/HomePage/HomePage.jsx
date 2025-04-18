import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMoviesSlide from './components/PopularMoviesSlide/PopularMoviesSlide'
import './HomePage.style.css'
//1.배너 만들기
//2. Top popular movies -> 첫번째 놈을 배너에 넣기
//3. top rated movies
//4. upcoming movies

const HomePage = () => {
  return (
    <div className='home-page'>
        <Banner />
        <PopularMoviesSlide />
    </div>
  )
}

export default HomePage
