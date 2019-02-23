import React from 'react'
import './Card.css'

const Card = props => {
  const {id, title, overview, backdrop_path, release_date } = props.movie

  return (
    <div className='card small ' key={id}>
      <div className='card-image waves-effect waves-block waves-light'>
        <img
          className='activator'
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        />
      </div>

      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {title}
          <i className='material-icons right'>more_vert</i>
        </span>
        <p className="release_date__color">
          {release_date}
        </p>
      </div>

      <div className='card-reveal'>
        <span className='card-title grey-text text-darken-4'>
          {title}
          <i className='material-icons right'>close</i>
        </span>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Card
