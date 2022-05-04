import React, { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import {Link} from 'react-router-dom';
import axios from 'axios';
import EditorToolbar, { modules, formats } from "../../EditorText/EditorToolbar.js";
import AppContext from '../../AppContext';

export default function EditNews({ post }) {
    const {state ,dispatch} = useContext(AppContext);
    const {posts} = state;
    const [postToEdit, setPostToEdit] = useState(post);
    const updatePost = async() =>{
      try{
        const token = localStorage.getItem("token")
        const option = {
          method: "put",
          url: `/api/v1/posts/${post._id}`,
          data: postToEdit,
          headers: {
             Authorization: `Bearer ${token}`,
          },
        };
      
        await axios(option);
        dispatch({
          type: "UPDATE_ONE_POST",
          payload:{...postToEdit},
        });
      }catch(error){
          console.log(error.response);
      }
    }
    // const [content, setContent] = useState("")
    // const onEditorChange = (value) =>{
    //   setContent({...postToEdit, 
    //     content : value})
    // } 
    // const onChangeValue = (e) => {
    //   setPostToEdit({
    //     ...postToEdit,
    //     [e.target.name]:e.target.value
    //   });
    // } 
    const editpost = posts.map((post)=>{
      return post;
    });
  return (
    <div className="container__box__content__admin">
      <form>
            <div className="box__title__category__news">
                <div className="title__box__edit__news">
                    <h2>Title</h2>
                    <input type="text" className='title__edit__news' />
                </div>
                <div className="dropdown__category__edit__box">
                    <label htmlFor="category__box__edit"><h2>Category</h2></label>
                    <select id="category__box__edit">
                        <option >KH</option>
                        <option >CT</option>
                        <option >XH</option>
                    </select>
                </div>
            </div>
             <h2>Content</h2>
          <EditorToolbar toolbarId={'t2'} />
          <ReactQuill

              theme="snow"
              placeholder={"Write something awesome..."}
              modules={modules('t2')}
              formats={formats}
          />

          <div className="button__action__edit__box">
              <Link to={"/admin/news/"} className="button__action__edit">
                    Update
              </Link>
              <Link to={"/admin/news/"} className="button__action__cancel">
                    Cancel
              </Link>
            
          </div>

        </form>
     </div>
  )
}
