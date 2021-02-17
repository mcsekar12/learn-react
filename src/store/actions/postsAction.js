import jsonPlaceholder from '../../api/jsonplaceholder.service';

export const getPosts = () => {
  return async (dispatch, getState) => {
    let res = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: res.data,
    });
  };
};
