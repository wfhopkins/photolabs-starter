import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const photos = new Array(3).fill(undefined);

// Note: Rendering a single component to build components in isolation
const App = () => {
  const mappedPhotos = photos.map((photo, index) => {
      return <PhotoListItem key={index} />
  });

  return (
    <div className="App">
      { mappedPhotos }
    </div>
  );
};
export default App;
