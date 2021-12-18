import React from 'react'
import { Link } from 'react-router-dom'

const AminProducts = ({products, handleRemoveProduct}) => {
    return (
        <>
        <div className="d-flex justify-content-between">
            <h1>Products Manager</h1>

            <Link className="btn btn-primary" to="/admin/product/add">Thêm mới</Link>
        </div>
        
        <table class="table">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Danh mục</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Giá</th>
                <th scope="col">Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {products.map( (item, i) => <tr key={item.id+1111}>
                    <th scope="row">{i+1 }</th>
                    <td>{item.name}</td>
                    <td>{item.id_category}</td>
                    <td>
                        <img src={item.img} alt="" style={{width: "5rem"}} />
                    </td>
                    <td>{item.price}</td>
                    <td>
                        <Link className="btn btn-primary" to={`/admin/product/${item.id}/update`}>Sửa</Link>
                        <button className="btn btn-danger" onClick={() => handleRemoveProduct(item.id)}>Xóa</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
        </>
    )
}

export default AminProducts
