import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';


const TopicList = (props) => {
  const mappedTopics = props.topics.map((topic, index) => {
    return <TopicListItem key={index} topic={topic} selectTopic={props.selectTopic}/>
  });

  return (
  <div className="top-nav-bar__topic-list">
    { mappedTopics }
  </div>
  )
}

export default TopicList