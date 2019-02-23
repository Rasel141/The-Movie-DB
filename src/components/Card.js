import React from 'react'

const Card = props => {
  const { title, overview, backdrop_path, release_date } = props.result

  return (
    <div class='card small '>
      <div class='card-image waves-effect waves-block waves-light'>
        <img
          class='activator'
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        />
      </div>

      <div class='card-content'>
        <span class='card-title activator grey-text text-darken-4'>
          {title}
          <i class='material-icons right'>more_vert</i>
        </span>
        <p>
          <a href='#'>{release_date}</a>
        </p>
      </div>

      <div class='card-reveal'>
        <span class='card-title grey-text text-darken-4'>
          {title}
          <i class='material-icons right'>close</i>
        </span>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Card
