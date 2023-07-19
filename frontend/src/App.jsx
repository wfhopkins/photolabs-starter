import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from './routes/PhotoDetailsModal'

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

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const photosPromise = axios.get("/api/photos")
    const topicsPromise = axios.get("/api/topics")

    const promises = [photosPromise, topicsPromise];

    Promise.all(promises)
    .then((results) => {
      setPhotos(results[0].data);
      setTopics(results[1].data);
    })
  }, []);



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
