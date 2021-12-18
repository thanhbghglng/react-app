import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { listCategory } from '../../../api/categoriesAPI';
import { list, read } from '../../../api/productAPI';

const CategoryPage = () => {
    const {id} = useParams();


    console.log(id);
    const [productsState, setProductsState] = useState([]);
    const getProduct = async () => {
    const {data} = await list();
        if(id!==null){
            const productCategory = data.filter(item=>item.id_category===id);
        setProductsState(productCategory)

        }
        else{
            setProductsState(data)
        }

        
        }
    useEffect(() => {
        getProduct()
        
    }, [])
    return (
        <div>
                <div className="col-9 d-flex row">
                    {productsState.map((item,index) => <div className="col-4 " key={index+100000}>
                        <div className="card ">
                            <img src={item.img} className="card-img-top" style={{objectFit:'cover'}} height="250px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-price">{item.price}$</p>
                                    <Link to={`/product/${item.id}`} className="btn btn-primary">Chi tiết </Link>
                                </div>
                        </div>
                        
                    </div>)}
                </div>
        </div>
    )
}

export default CategoryPage
