import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge'

const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} selectTopic={props.selectTopic}/>
      <FavBadge isFavPhotoExist={props.likedPhotosIds.length}/>
    </div>
  )
}

export default TopNavigation;