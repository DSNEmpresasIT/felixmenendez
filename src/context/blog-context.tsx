import { createContext, useContext, ReactNode, useReducer } from "react";
import { BlogTypes } from "./types/blog";
import type { BlogContextState, FacebookPost, Keys } from "src/util/types";

interface Action {
  type: BlogTypes;
  payload: FacebookPost | FacebookPost[] | Keys;
}

const BlogContext = createContext(undefined);

const initialState: BlogContextState = {
  keys: undefined,
  facebookPostDetail: undefined,
  facebookPostData: undefined
}

function blogReducer(state: BlogContextState, action: Action) {
  switch (action.type) {
    case BlogTypes.SET_KEYS:
      return { ...state, keys: action.payload }
    case BlogTypes.SET_FACEBOOK_POSTS: 
      return { ...state, facebookPostData: action.payload }
    case BlogTypes.SET_FACEBOOK_POST_DETAIL: 
      return { ...state, facebookPostDetail: action.payload }
    default:
      return state;
  }
}

export const BlogContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<any>(blogReducer, initialState);
  return (
    // @ts-ignore
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlogContext = () => useContext(BlogContext);
