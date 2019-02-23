import React, { Component } from 'react'
import axios from 'axios'

import Card from './Card'
class PopularMovies extends Component {
  state = {
    movies: []
  }

  componentDidMount () {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=1680238e0bdc9856a3677a6e699d6d9e&language=en-US&page=1'
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
      <div>
        {this.state.movies.map(movie => {
          return <Card movie={movie} key={movie.id} />
        })}
      </div>
    )
  }
}

export default PopularMovies
