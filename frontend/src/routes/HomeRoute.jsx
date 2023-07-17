import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  const [favorite, setFavorite] = useState(false);
  const selectFavorite = () => setFavorite(favorite ? false : true);

console.log("props: ", props);
  return (<div className="home-route">
    <TopNavigation topics={props.topics} selectFavorite={selectFavorite}/>
    <PhotoList photos={props.photos}/>
  </div>
  )
};
export default HomeRoute;