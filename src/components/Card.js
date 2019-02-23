import React from 'react'
import './Card.css'

const Card = props => {
  const {id, title, overview, backdrop_path, release_date, vote_average } = props.movie

  return (
    <div className='card small card__box' key={id}>
      <div className='card-image waves-effect waves-block waves-light'>
        <img
          className='activator'
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        />
      </div>

      <div className='card-content'>
        <span className='card-title activator red-text text-darken-4 '>
          {title}
          <i className='material-icons right'>more_vert</i>
        </span>
        <p className="grey-text text-darken-5">
          {release_date}
        </p>
      </div>

      <div className='card-reveal grey lighten-5'>
        <span className='card-title red-text text-darken-4 card-reveal__title'>
          {title}
          <i className='material-icons right'>close</i>
        </span>

        <span className='teal-text text-darken-4'>
          Overview
        </span>
        <p className="grey-text text-darken-5">{overview}</p>
        
        <span className='teal-text text-darken-4'>
          Average Vote
        </span>
        <p className="grey-text text-darken-5">{vote_average}</p>
      </div>
    </div>
  )
}

export default Card
