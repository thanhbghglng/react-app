import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { read } from '../../../api/productAPI';
import { Link  } from 'react-router-dom';
const ProductDetail = ({category}) => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    
    const getProduct = async () => {
        const {data} = await read(id);
        setProduct(data)
    }
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="container mt-5">
            {product !== null && <div className="row pt-5">
                <div className="col-4">
                    <img width="500" className='border w-100'  src={product.img} alt="" />
                    <div className="text-center mt-4 border-top">
                        <button className="btn btn-primary rounded px-5 py-3 mt-4 ">Thêm vào giỏ hàng +</button>
                    </div>
                </div>

                <div className="col-5 text-start">
                    <div className="ms-5 ">
                        <h1>{product.name}</h1>
                        <h3>Giá :{product.price}$</h3>
                        <p className="border-bottom"> Mô tả </p>
                        <p>{product.desc}</p>
                    </div>
                </div>
                <div className="col-3">
                    <ul className="list-group shadow-sm">
                        <Link to={`/product`} class="list-group-item list-group-item-action active" aria-current="true">
                            Tất cả sản phẩm
                        </Link>
                        {category.map(item=><Link to={`/product?id_category=${item.id}`} class="list-group-item list-group-item-action">{item.name}</Link>)}
                        
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default ProductDetail
