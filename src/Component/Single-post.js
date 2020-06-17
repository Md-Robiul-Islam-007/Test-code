import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types'
import axios from 'axios';

class SinglePost extends Component {

    state = {
        imgUrl : '',
        author : '',
        isLoading : true
    }

    static  propTypes = {
        post : PropTypes.object.isRequired
    }

    componentDidMount() {
        const { featured_media, author } = this.props.post;

        axios.get(`https://ojjohost.com/robi/wp-json/wp/v2/media/${featured_media}`)
        .then(res => {
            this.setState({
                imgUrl : res.data.media_details.sizes.full.source_url,
                isLoading : false
            })
        });
        
    }

    render() {
        console.log(this.state)
        const post = this.props.post;
        const { imgUrl, author } = this.state;
        const Loading = this.state.isLoading;
            return (
                <>
                   <h2 style={{marginBottom : '5px'}}> { post.title.rendered } </h2>
                   <small style={{marginBottom : '20px', display: 'block'}}> Review by {post.author}<strong> { author } </strong> </small>
                   { !Loading ? <img src={ imgUrl } alt={ post.title.rendered } /> : <img src='/css-fun-Little-loader.gif' style={{width : '700px',border : '2px solid #eee'}} alt='logo' /> }
                   <span> {renderHTML( post.excerpt.rendered )} </span>
                </>
            )
    }
}

export default SinglePost;