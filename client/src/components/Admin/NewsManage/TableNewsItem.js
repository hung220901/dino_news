import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export default function TableNewsItem({post}) {
  return (
        <tbody>
            <tr>
              <td data-label="STT">1</td>
              <td data-label="Title"><p className='limit__text__display'>{post.title}</p></td>
              <td data-label="Content"><p className='limit__text__display'>{post.content}</p></td>
              <td data-label="Category">Khoa học</td>
              <td data-label="Action">
                <Link className="btn__edit__admin" to={"/admin/news/edit/" + post._id}>
                  <FontAwesomeIcon icon={faPen} /> 
                </Link>

              

                <Link className="btn__delete__admin" to={"/admin/news/delete/"+post._id}>

                  <FontAwesomeIcon icon={faTrash} />

                </Link>
                
              </td>
            </tr>
          </tbody>

  )
}
