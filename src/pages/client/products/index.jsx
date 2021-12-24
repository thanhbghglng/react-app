import React, { useEffect, useState } from 'react'

import { BrowserRouter,Routes, Route, Link ,Outlet} from 'react-router-dom';
import CategoryPage from '../category';
// import { list } from '../../../api/productAPI';
// import { createSearchParams } from 'react-router-dom';
// import { createHistory } from 'his'

const Products = ({products, category}) => {
    const [productsState, setProductsState] = useState(products);
    const [showCategory, setShowCategory] = useState('');

    useEffect( () => {
        const searchParams = new URLSearchParams(window.location.search);
        const id_category = searchParams.get('id_category');
        console.log(id_category)
        if(id_category !== null){
            const categoryName = category.filter(item => item.id === id_category)[0];
            console.log(categoryName)
            // setShowCategory(categoryName.name);

            const newProducts = products.filter( item => item.id_category === id_category);
            setProductsState(newProducts)
        }
    }, [window.location])

    return (
        <div className="container" style={{marginTop:'7rem',marginBottom:"5rem"}}>
            <h1>Sản phẩm</h1>
            <div className="row ">
                <div className="col-3">
                    <ul className="list-group">
                                    <Link to={`/product`} class="list-group-item list-group-item-action" aria-current="true">
                                        Tất cả sản phẩm
                                    </Link>
                                    {category.map(item=><Link to={`/category/${item.id}`} class="list-group-item list-group-item-action">{item.name}</Link>)}
                    </ul>
                    <Outlet></Outlet>
                </div>
                <div className="col-9 d-flex row">
                    {productsState.map((item,index) => <div className="col-4 " key={index+100000}>
                        <div className="card ">
                            <img src={item.img} className="card-img-top" style={{objectFit:'cover'}} height="250px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-price">{item.price}$</p>
                                    <Link to={`/product/${item.id}`} className="btn btn-primary">Chi tiết </Link>
                                    <Link to="/">Cart</Link>
                                </div>
                        </div>
                        
                    </div>)}
                </div>
            </div>  
        </div>
    )
}

export default Products
