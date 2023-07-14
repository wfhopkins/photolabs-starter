
import React from 'react';

import '../styles/PhotoListItem.scss';

import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={ props.imageSource }/>
      <div className="photo-list__user-details ">
        <img className="photo-list__user-profile" src={props.profile} />
        <div className="photo-list__user-info">
          <p>{props.username}</p>
          <p className="photo-list__user-location">{props.location.city}, {props.location.country}</p>
        </div>
      </div>
    </div>
  )
}

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem;