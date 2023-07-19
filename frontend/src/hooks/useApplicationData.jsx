// The state object will contain the entire state of the application.
// The updateToFavPhotoIds action can be used to set the favourite photos.
// The setPhotoSelected action can be used when the user selects a photo.
// The onClosePhotoDetailsModal action can be used to close the modal.

// import photos from './src/mocks/photos.js';
// import topics from './src/mocks/topics.js';

// import { useState } from 'react'
import { useContext, useEffect, useRef, useState } from 'react'


const useApplicationData = () => {
  const [likedPhotosIds, setLikedPhotoIds] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const state = "";

  const selectPhoto = (photoId) => {
    if (!photoId) return;
    setSelectedId(photoId)
    setIsOpen(true)
  };

  const toggleLikedPhotosIds = (photoId) => {
    if (!photoId) return;

    if (likedPhotosIds.includes(photoId)) {
      //remove from the new arrary
      return setLikedPhotoIds(likedPhotosIds.filter(likedPhotoId => likedPhotoId !== photoId));
    }
    //add to the new array
    return setLikedPhotoIds([...likedPhotosIds, photoId]);
  }


    return {
      state,
      selectedId,
      toggleLikedPhotosIds,
      selectPhoto,
      isOpen,
      setIsOpen,
      likedPhotosIds
    }
}

export default useApplicationData;