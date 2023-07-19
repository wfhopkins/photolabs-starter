import React from "react";


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
    selectTopic,
    selectPhoto,
    closeModal
  } = useApplicationData();



  return (
    <div className="App">
      <HomeRoute
      photos={state.photos}
      topics={state.topics}
      toggleLikedPhotosIds={toggleLikedPhotosIds}
      likedPhotosIds={state.likedPhotosIds}
      selectPhoto={selectPhoto}
      selectTopic={selectTopic}
      />
      {state.isOpen && <PhotoDetailsModal
      photos={state.photos}
      selectedId={state.selectedId}
      closeModal={closeModal}
      topics={state.topics}
      toggleLikedPhotosIds={toggleLikedPhotosIds}
      likedPhotosIds={state.likedPhotosIds}
      selectPhoto={selectPhoto}
      />}
    </div>
  );
};
export default App;
