import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';




export const PhotoDetailsModal = (props) => {
  const handleClick = () => {
    props.setIsOpen(false);
  };
  console.log(props);
  return (
  <div className='photo-details-modal'>
    <button className='photo-details-modal__close-button' onClick={handleClick}>
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_428_287)">
          <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_428_287">
          <rect width="18" height="18" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
    <PhotoFavButton 
      toggleLikedPhotosIds={props.toggleLikedPhotosIds}
      likedPhotosIds={props.likedPhotosIds}
    />
    <img className="photo-details-modal__image" src={props.photos.find(photo => photo.id === props.selectedId).urls.full} />
    <h2 className="photo-details-modal__header">Similar Photos</h2>
    <PhotoList 
      photos={Object.values(props.photos.find(photo => photo.id === props.selectedId).similar_photos)}
      toggleLikedPhotosIds={props.toggleLikedPhotosIds}
      likedPhotosIds={props.likedPhotosIds}
      selectPhoto={props.selectPhoto}
    />    
  </div>
  );
};


export default PhotoDetailsModal;