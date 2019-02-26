import React, {Component} from 'react'
import api_key from '../apiKey'

import Card from './Card'
import './TopMovies.css'
class TopMovies extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      this.setState({
        movies: data.results
      })
    })
  }

  render() {
    return (
      <div className='all-card__list'>
        {this.state.movies.map(movie => {
          return <Card movie={movie} key={movie.id} />
        })}
      </div>
    )
  }
}

export default TopMovies
