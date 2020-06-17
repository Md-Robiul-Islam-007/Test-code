import React, { Component } from 'react';
import PostMap from './Post-map'
import axios from 'axios'

class Post extends Component {

    state = {
        posts : []
    }

    componentDidMount() {
        axios.get(`https://ojjohost.com/robi/wp-json/wp/v2/posts`)
         .then(res => {
             this.setState({
                 posts : res.data
             })
         })
         .catch(err => console.log(err))
    }
    
    render() {
        const isloading = this.state.posts.length;
            if(isloading === 0 ){
                return(
                    <>
                    <img src='/loading.gif' style={{display : 'block', marginBottom : '30px'}} alt='logo' />
                    <img src='/loading.gif' style={{display : 'block', marginBottom : '30px'}} alt='logo' />
                    <img src='/loading.gif' style={{display : 'block', marginBottom : '30px'}} alt='logo' />
                    </>
                )
            }else{
                return(
                    <>
                    <PostMap posts={ this.state.posts } />
                    </>
                )
            }
    }
}

export default Post;