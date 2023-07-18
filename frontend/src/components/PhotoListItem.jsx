
import React from 'react';

import '../styles/PhotoListItem.scss';

import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {


  const handleClick = () => {
    props.selectPhoto(props.photo.id)
  }

  return (
    <div className="photo-list__item" onClick={handleClick}>
      <PhotoFavButton 
      toggleLikedPhotosIds={props.toggleLikedPhotosIds}
      photoId={props.photo.id}
      likedPhotosIds={props.likedPhotosIds}
      />
      <img className="photo-list__image" src={ props.photo.urls.regular }/>
      <div className="photo-list__user-details ">
        <img className="photo-list__user-profile" src={props.photo.user.profile} />
        <div className="photo-list__user-info">
          <p>{props.photo.user.username}</p>
          <p className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</p>
        </div>
      </div>
    </div>
  )
}

// PhotoListItem.defaultProps = {
//   "id": "1",
//   "location": {
//     "city": "Montreal",
//     "country": "Canada"
//   },
//   "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   "username": "Joe Example",
//   "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
// }

export default PhotoListItem;