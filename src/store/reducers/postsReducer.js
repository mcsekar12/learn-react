const posts = [];

export const postsReducer = (state = posts, action) => {
  if (action.type === 'FETCH_POSTS') {
    debugger;
    return action.payload;
  }
  return state;
};
