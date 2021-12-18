import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = ({products,category}) => {
    const countProduct = products.map(item=>item.id)
    const countCategory = category.map(item=>item.id)
    
  
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 col-6">
                    <div className="small-box bg-info">
                    <div className="inner">
                        <h3>{countProduct.length}</h3>

                        <p>Sản phẩm</p>
                    </div>
                    <div className="icon">
                        <i className="ion ion-bag"></i>
                    </div>
                    <Link to="/admin/products"  className="small-box-footer">Xem thêm </Link>
                    </div>
                </div>
        
                <div className="col-lg-6 col-6">
                
                    <div className="small-box bg-success">
                    <div className="inner">
                        <h3>{countCategory.length}</h3>

                        <p>Danh mục sản phẩm</p>
                    </div>
                    <div className="icon">
                        <i className="ion ion-stats-bars"></i>
                    </div>
                    <Link to="/admin/categories" className="small-box-footer">Xem thêm</Link>
                    </div>
                </div>
          
        </div>
        </div>
    )
}

export default Dashboard
