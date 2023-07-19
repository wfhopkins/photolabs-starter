import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const handleClick = () => {
    props.selectTopic(props.topic.id)
  }

  return (
  <div key={props.topic.key} className="topic-list__item" onClick={handleClick}>
    <span>{props.topic.title}</span>
  </div>
  )
}

export default TopicListItem;