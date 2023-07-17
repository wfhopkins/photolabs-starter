import React from 'react';

import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';


const TopicList = (props) => {
  const mappedTopics = props.topics.map((topic, index) => {
    return <TopicListItem key={index} topic={topic} />
  });



  return (
  <div className="top-nav-bar__topic-list">
    { mappedTopics }
  </div>
  )
}

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },  
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
  ]
}
export default TopicList