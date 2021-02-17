import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from './../store/actions/postsAction';

const Posts = (props) => {
  useEffect(() => {
    props.getPosts().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <div>Posts</div>
      <div>
        {props.posts.map((item, index) => {
          return (
            <div>
              {index + 1}.{item.title}
              <div>{item.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(
  (state) => {
    return {
      posts: state.posts,
    };
  },
  {
    getPosts: getPosts,
  }
)(Posts);
