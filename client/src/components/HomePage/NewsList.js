import React, { useCallback, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom'
import NewsItem from './NewsItem';
import AppContext from '../AppContext'
import '../../css/HomePage/LatestNews.css';
import axios from 'axios';

export default function NewsList() {
    const {state, dispatch} = useContext(AppContext);
    const {posts, user } = state;
    const getAllPosts = useCallback(async()=>{
        try{
            const options = {
                method: "get",
                url: "/api/v1/posts"
            }
            const response = await axios(options);
            const posts = response.data.data.posts;
            dispatch({type: "GET_ALL_POSTS", payload: posts});
        }
        catch(error){
            console.log(error);
        }
    },[dispatch]) 
    useEffect(() => {
        getAllPosts()
    }, [getAllPosts])
    const newPosts = posts.map((post) => {
        if(user){
            return post.author.name === user.userName ?{...post, isEditable: true}: post;
        }
        else{
            return { ...post, isEditable: false};
        }
    });
    console.log(newPosts);
  return (
    <section className='news-selection'>
        <div className="news-list">
            {newPosts.map((post) =>(
                <Link to={"/news-detail/"+ post._id}>
                    <NewsItem post={post} key={post._id} />
                </Link>
                
            ))}
        </div>
    </section>
  )
}
