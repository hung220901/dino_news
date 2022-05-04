import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons'

export default function CategoryAdmin() {
  return (
    <div className="container__box__content__admin">
    <table className="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Name Category</th>
          <th>Action</th>
        </tr>
        
      </thead>
      <tbody>
        <tr>
          <td data-label="STT">1</td>
          <td data-label="Name Category">Khoa học</td>
          <td data-label="Action">
              <button className="btn__edit__admin"> <FontAwesomeIcon icon={faPen} /> </button>
              <button class="btn__delete__admin"><FontAwesomeIcon icon={faTrash} /></button>
          </td>
        </tr>

        <tr>
          <td data-label="STT">2</td>
          <td data-label="Name Category">Funny</td>
          <td data-label="Action">
            <button className="btn__edit__admin"> <FontAwesomeIcon icon={faPen} /> </button>
            <button class="btn__delete__admin"><FontAwesomeIcon icon={faTrash} /></button>
          </td>
        </tr>

        <tr>
          <td data-label="STT">3</td>
          <td data-label="Name Category">Chính trị</td>
          <td data-label="Action">
          <button className="btn__edit__admin"> <FontAwesomeIcon icon={faPen} /> </button>
              <button class="btn__delete__admin"><FontAwesomeIcon icon={faTrash} /></button>
          </td>
        </tr>

        <tr>
          <td data-label="STT">4</td>
          <td data-label="Name Category">Giải trí</td>
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
