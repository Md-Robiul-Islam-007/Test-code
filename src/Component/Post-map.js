import React, { Component } from 'react';
import SinglePost from './Single-post'

class PostMap extends Component {
    render() {
        return (
            <>
                {
                    this.props.posts.map(post => {
                        return(
                            <SinglePost key={post.id} post={post} />
                        )
                    })
                }
            </>
        );
    }
}

export default PostMap;