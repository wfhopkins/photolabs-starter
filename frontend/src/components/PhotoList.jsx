import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const mappedPhotos = props.photos.map((photo) => {
    return (<PhotoListItem
      key={photo.id}
      photo={photo}
      toggleLikedPhotosIds={props.toggleLikedPhotosIds}
      likedPhotosIds={props.likedPhotosIds}
      selectPhoto={props.selectPhoto}
      />);
});

  return (
  <ul className="photo-list">
    {mappedPhotos}
  </ul>
  );
};

export default PhotoList;