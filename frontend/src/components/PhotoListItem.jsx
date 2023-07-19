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

export default PhotoListItem;