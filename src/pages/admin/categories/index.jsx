import React from 'react'
import { Link } from 'react-router-dom'

const AdminCategory = ({category, handleRemoveCategory}) => {
    return (
      <>
      <div className="d-flex justify-content-between">
            <h1>Products Manager</h1>

            <Link className="btn btn-primary" to="/admin/categories/add">Thêm mới</Link>
        </div>
        
        <table class="table">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Name</th>
              
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {category.map( (item, i) => <tr key={item.id+1111}>
                    <th scope="row">{i+1 }</th>
                    <td>{item.name}</td>
                    <td>
                        <Link className="btn btn-primary" to={`/admin/categories/${item.id}/update`}>Sửa</Link>
                        <button className="btn btn-danger" onClick={() => handleRemoveCategory(item.id)}>Xóa</button>
                    </td>
                </tr>)}
            </tbody>
        </table>

      </>
    )
}

export default AdminCategory
