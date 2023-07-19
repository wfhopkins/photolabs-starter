import React from "react";
import { useState } from 'react';

import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from './routes/PhotoDetailsModal'

import photos from './mocks/photos.js';
import topics from './mocks/topics.js';

import useApplicationData from "./hooks/useApplicationData";


// Note: Rendering a single component to build components in isolation
/**
 * JS Doc
 * 
 */
const App = () => {
  const {
    state,
    toggleLikedPhotosIds,
    selectPhoto,
    closeModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
      photos={photos}
      topics={topics}
      toggleLikedPhotosIds={toggleLikedPhotosIds}
      likedPhotosIds={state.likedPhotosIds}
      selectPhoto={selectPhoto}
      />
      {state.isOpen && <PhotoDetailsModal
      photos={photos}
      selectedId={state.selectedId}
      closeModal={closeModal}
      topics={topics}
      toggleLikedPhotosIds={toggleLikedPhotosIds}
      likedPhotosIds={state.likedPhotosIds}
      selectPhoto={selectPhoto}
      />}
    </div>
  );
};
export default App;
