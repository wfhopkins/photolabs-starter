import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false);
  
  const handleClick = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div onClick={handleClick}  className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill= {isLiked ? "#C80000" : null} displayAlert={false}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;