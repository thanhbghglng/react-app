import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import Header from './component/Header'

const LayoutAdmin = () => {
    return (
       <>

           <Header/>
            <div className="container " style={{marginTop:"8rem"}}> 
                <div className="row">
                    <div className="col-3">
                        <div id="list-example" className="list-group">
                            <Link className="list-group-item list-group-item-action" to="/admin">Bảng điều khiển</Link>
                            <Link className="list-group-item list-group-item-action" to="/admin/categories">Quản trị danh mục</Link>
                            <Link className="list-group-item list-group-item-action" to="/admin/products">Quản trị sản phẩm</Link>
                        </div>
                    </div>

                    <div className="col-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayoutAdmin
