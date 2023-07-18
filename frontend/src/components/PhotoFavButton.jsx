import React, { useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton(props) {

  const handleClick = (event) => {
    event.stopPropagation()
    props.toggleLikedPhotosIds(props.photoId)
  }
  
  return (
    <div onClick={handleClick}  className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill= {props.isLiked ? "#C80000" : null} displayAlert={false} />
      </div>
    </div>
  );
}

export default PhotoFavButton;