import { useEffect, useReducer } from 'react'
import axios from 'axios';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SELECT_TOPIC_ID: 'SELECT_TOPIC_ID'
}

function reducer(state, action) {
  if (action.type === ACTIONS.FAV_PHOTO_ADDED) {
    const photoId = action.value;
    return {...state, likedPhotosIds: [...state.likedPhotosIds, photoId]}
  }

  if (action.type === ACTIONS.FAV_PHOTO_REMOVED) {
    const photoId = action.value;
    return {...state, likedPhotosIds: state.likedPhotosIds.filter(likedPhotoId => likedPhotoId !== photoId)}
  }

  if (action.type === ACTIONS.SELECT_PHOTO) {
    const photoId = action.value;
    return {...state, selectedId: photoId}
  }

  if (action.type === ACTIONS.DISPLAY_PHOTO_DETAILS) {
    return {...state, isOpen: action.value}
  }

  if (action.type === ACTIONS.SELECT_TOPIC_ID) {
    const topicId = action.value;
    return {...state, selectedTopicId: topicId}
  }

  if (action.type === ACTIONS.SET_TOPIC_DATA) {
    return {...state, topics: action.value}
  }

  if (action.type === ACTIONS.SET_PHOTO_DATA) {
    return {...state, photos: action.value}
  }

  throw new Error("reducer attempts invalid action")
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    likedPhotosIds: [],
    selectedId: null,
    isOpen: false,
    topics: [],
    photos: [],
    selectedTopicId: null
    }  
  );

  const selectPhoto = (photoId) => {
    if (!photoId) return;
    dispatch({type: ACTIONS.SELECT_PHOTO, value: photoId})
    dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: true})
  }

  const toggleLikedPhotosIds = (photoId) => {
    if (!photoId) return;

    if (state.likedPhotosIds.includes(photoId)) {
      //remove from the new arrary
      return dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, value: photoId })
    }
    //add to the new array
    return dispatch({type: ACTIONS.FAV_PHOTO_ADDED, value: photoId})
  }

  const closeModal = () => {
    dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: false})
  }

  const selectTopic = (topicId) => {
    if (!topicId) return;
    dispatch({type: ACTIONS.SELECT_TOPIC_ID, value: topicId})
  }

  useEffect(() => {
    if (!state.selectedTopicId) return;
    axios.get(`/api/topics/photos/${state.selectedTopicId}`)
    .then((res) => {
      dispatch({type: ACTIONS.SET_PHOTO_DATA, value: res.data})
    })
  }, [state.selectedTopicId])

  useEffect(() => {
    const photosPromise = axios.get("/api/photos")
    const topicsPromise = axios.get("/api/topics")

    const promises = [photosPromise, topicsPromise];

    Promise.all(promises)
    .then((results) => {
      dispatch({type: ACTIONS.SET_PHOTO_DATA, value: results[0].data})
      dispatch({type: ACTIONS.SET_TOPIC_DATA, value: results[1].data})
    })
  }, []);

    return {
      state,
      toggleLikedPhotosIds,
      selectPhoto,
      selectTopic,
      closeModal
    }
}

export default useApplicationData;