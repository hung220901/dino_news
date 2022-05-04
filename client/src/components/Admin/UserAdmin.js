import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
export default function UserAdmin() {
  return (
<div className="container__box__content__admin">
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>UserName</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            
          </thead>
          <tbody>
            <tr>
              <td data-label="STT">1</td>
              <td data-label="UserName">Admin</td>
              <td data-label="Type">Admin</td>
              <td data-label="Status">Active</td>
              <td data-label="Action">
                <button className="btn__edit__admin"> <FontAwesomeIcon icon={faPen} /> </button>
                <button class="btn__delete__admin"><FontAwesomeIcon icon={faTrash} /></button>
              </td>
            </tr>
  
            <tr>
              <td data-label="STT">2</td>
              <td data-label="UserName">Cus</td>
              <td data-label="Type">Customer</td>
              <td data-label="Status">Active</td>
              <td data-label="Action">
              <button className="btn__edit__admin"> <FontAwesomeIcon icon={faPen} /> </button>
                <button class="btn__delete__admin"><FontAwesomeIcon icon={faTrash} /></button>
              </td>
            </tr>
  
          </tbody>
        </table>
  
      </div>
  )
}
