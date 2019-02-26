import React, { Component } from 'react'
import api_key from '../apiKey'

import Card from './Card'

import './PopularMovies.css'
class UpcomingMovies extends Component {
  state = {
    movies: []
  }

  componentDidMount () {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.results.length)
        if(data.results.length) {
          this.setState({
            movies: data.results
          })
        }else {
          console.log('lading..')
        }
      })
      .catch(error => console.log('data not found'))
  }

  render () {
    return (
      <div>
        <h2 className='center'>Upcoming Movie Lists</h2>
        <div className='all-card__list'>
          {this.state.movies.map(movie => {
            return <Card movie={movie} key={movie.id} />
          })}
        </div>
      </div>
    )
  }
}

export default UpcomingMovies
