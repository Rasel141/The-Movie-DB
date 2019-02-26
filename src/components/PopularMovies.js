import React, { Component } from 'react'
import api_key from '../apiKey'
import axios from 'axios'

import Card from './Card'

import './PopularMovies.css'
class PopularMovies extends Component {
  state = {
    movies: []
  }

  componentDidMount () {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
      )
      .then(res => {
        this.setState({
          movies: res.data.results
        })
        console.log(res.data.results)
      })
  }

  render () {
    return (
      <div className='all-card__list'>
        {this.state.movies.map(movie => {
          return <Card movie={movie} key={movie.id} />
        })}
      </div>
    )
  }
}

export default PopularMovies
