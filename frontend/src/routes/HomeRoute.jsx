import React from 'react';


import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {


  return (<div className="home-route">
    <TopNavigation
      selectTopic={props.selectTopic}
      topics={props.topics}
      likedPhotosIds={props.likedPhotosIds}
    />
    <PhotoList
      photos={props.photos}
      toggleLikedPhotosIds={props.toggleLikedPhotosIds}
      likedPhotosIds={props.likedPhotosIds}
      selectPhoto={props.selectPhoto}
    />
  </div>
  )
};
export default HomeRoute;