import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';

export default function DeleteNews({post}) {
    const [openDelete, setOpenDelete] = useState(false);
    const {dispatch} = useContext(AppContext);
    const deletePost = async () =>{
      try {
        const token = localStorage.getItem("token");
        const option ={
          method: "delete",
          url: `/api/v1/posts/${post._id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await axios(option);
        dispatch({ type: "DELETE_ONE_POST", payload: {_id: post._id}});
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className="container__box__content__admin">
        <h1>Are you sure delete this news?</h1>
        <Link to={"/admin/news"} className="button__action__edit" onClick={()=> setOpenDelete(false)}>
            Yes
        </Link>
        <Link to={"/admin/news"} className="button__action__cancel" onClick={()=> setOpenDelete(false)}>
            Cancel
        </Link>
    </div>
  )
}
