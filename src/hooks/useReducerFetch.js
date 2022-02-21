import { useEffect, useReducer } from "react"
import baseAPI from "../config/baseAPI"

const getIndex = (state, action) => state.findIndex((todo) => todo._id === action.id);

const listAction = (state, action) => {
  switch(action.type) {
    case 'COMPLETE_TODO':
      return 1
    case 'EDIT_TODO':
      return 1
    case 'DELETE_TODO':
      return 1
    case 'GET_TODOS': 
      return GET_TODOS()
    default: 
      return state
  } 
}
  
const GET_TODOS = async () => {
  try {
    const response = await baseAPI.get(`/api/posts`)
    return response.data.posts
  }
  catch (error) {
    return error.response.data.message
  }
}
const useReducerFetch = () => {
  const [ result, dispatch ] = useReducer(listAction, [])
  
  useEffect(() => {
    dispatch({type: 'GET_TODOS'})
    GET_TODOS()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return { result, dispatch }
}
export default useReducerFetch