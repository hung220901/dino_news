import React, {useEffect, useCallback, useContext} from 'react';
import AppContext from '../AppContext';
import '../../css/Admin/newsadmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import TableNewsItem from './NewsManage/TableNewsItem';
import { Link } from 'react-router-dom';
import EditNews from './NewsManage/EditNews';


export default function NewsAdmin() {
  const {state, dispatch} = useContext(AppContext);
  const {posts } = state;
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
    const editpost = posts.map((post)=>{

      return post;
    });
  
    return (
      
      <div className="container__box__content__admin">
        <div className="create__new__post___box">
          <Link className='btn__create__new__post' to={"/admin/news/create"} >
            <FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Title</th>
              <th>Content</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
            
          </thead>

        {editpost.map((post) =>(
          <>
          <TableNewsItem post={post} key={post._id} />

          </>
              
        ))}

        </table>
  
      </div>
    )

}
