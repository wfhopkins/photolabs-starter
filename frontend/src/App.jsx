import React from "react";
import { useState } from 'react';

import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from './routes/PhotoDetailsModal'

import photos from './mocks/photos.js';
import topics from './mocks/topics.js';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likedPhotosIds, setLikedPhotoIds] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="App">
      <HomeRoute
      photos={photos}
      topics={topics}
      toggleLikedPhotosIds={toggleLikedPhotosIds}
      likedPhotosIds={likedPhotosIds}
      selectPhoto={selectPhoto}
      />
      {isOpen && <PhotoDetailsModal
      photos={photos}
      selectedId={selectedId}
      setIsOpen={setIsOpen}
      topics={topics}
      toggleLikedPhotosIds={toggleLikedPhotosIds}
      likedPhotosIds={likedPhotosIds}
      />}
    </div>
  );
};
export default App;
