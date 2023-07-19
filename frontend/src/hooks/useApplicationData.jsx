import { useContext, useEffect, useRef, useState, useReducer } from 'react'

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
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
  throw new Error("reducer attempts invalid action");
}



const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, {
    likedPhotosIds: [],
    selectedId: null,
    isOpen: false
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

    return {
      state,
      toggleLikedPhotosIds,
      selectPhoto,
      closeModal
    }
}

export default useApplicationData;