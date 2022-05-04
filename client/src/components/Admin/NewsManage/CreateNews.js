import React, { useContext, useState } from 'react'
import axios from 'axios'
import AppContext from '../../AppContext'
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from "../../EditorText/EditorToolbar.js";
import { Link } from 'react-router-dom';





export default function CreateNews() {
    const {state, dispatch} = useContext(AppContext)
    const {user} = state;
    const [postInput, setPostInput] = useState({title:"",content:""})
    const [errorMessage, setErrorMessage] = useState(null);
    const onSubmitHandle = async (e) =>{
        try {
            e.preventDefault();
            const token = localStorage.getItem("token");
            const option = {
                method: "post",
                url: "/api/v1/posts",
                data: postInput,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios(option);
            const {post} = response.data.data;
            const author = {_id: post.author, name: user.userName};
            dispatch({
                type: "CREATE_ONE_POST",
                payload: {...post, author, isEditable: true},
            });
            setPostInput({title:"",content:""});
         } catch (error) {
            setErrorMessage(error.response.data.message)
        }
    };



  return (
    <div className="container__box__content__admin">
        <h1 style={{textAlign:"center"}}>Create news</h1>
        {errorMessage && (
            <div className="error-message"> Error: {errorMessage}</div>
        )}
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
          <EditorToolbar toolbarId={'t1'} />
          <ReactQuill

              theme="snow"
              placeholder={"Write something awesome..."}
              modules={modules('t1')}
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

        {/* <form action="" onSubmit={onSubmitHandle}>
        <textarea 
        name="title"
         id="title"
         value={postInput.title}  
        onChange={(e)=> setPostInput({...postInput, [e.target.name]: e.target.value})}>

        </textarea>

        <textarea 
        name="content"
         id="content" 
        value={postInput.content}
        onChange={(e)=> setPostInput({...postInput, [e.target.name]: e.target.value})}
          ></textarea>
        <input type="submit" />
        </form> */}
    </div>
  )
}
