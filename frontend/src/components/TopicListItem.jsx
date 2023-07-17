import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  return (
  <div key={props.topic.key} className="topic-list__item">
    <span>{props.topic.title}</span>
  </div>
  )
}

// TopicListItem.defaultProps =   {
//   "id": "1",
//   "slug": "topic-1",
//   "label": "Nature"
// }
export default TopicListItem;