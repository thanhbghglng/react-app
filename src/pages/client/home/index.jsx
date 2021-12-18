import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const HomeClient = ({products}) => {
    // const [products, setProducts] = useState([]);

    // useEffect( () => {

    // }, []);

    return (
        <div className="container">
            <div id="carouselExampleIndicators" class="carousel slide " style={{marginTop:"6rem"}} data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img height="500" src="https://dojeannam.com/wp-content/uploads/2017/10/banner-thoi-trang-nam-cong-so-2018.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img height="500" src="https://designer.com.vn/wp-content/uploads/2017/10/tt4.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img height="500" src="https://thietke6d.com/wp-content/uploads/2021/03/Mau-banner-quang-cao-dep-1.png" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>

            <div className="mt-4 ">
                <h2 className='mb-3 mt-4'>
                    Sản phẩm nổi bật
                </h2>

                <div className="row d-flex  mx-auto">
                    {products.map( (item, index) => {
                        if(index <=3 ){
                            return <div key={item.id} className="card hover-product col-lg-3 m-3 rounded p-3 shadow-sm" style={{width: "18rem"}}>
                            <img src={item.img} className="card-img-top" style={{objectFit:'cover'}} height="250px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text"> <span className="text-danger me-1">{item.price}</span><b>VNĐ</b></p>
                                <Link to={`/product/${item.id}`} className="btn btn-primary">Chi tiết</Link>
                            </div>
                        </div>
                        }
                        return;
                    })}
                </div>
            </div>

            <div className="pt-4">
                <h2>
                    Tất cả sản phẩm
                </h2>

                <div className="row d-flex mx-auto ">
                     {products.map( (item, index) => {
                        if(index <= 7 ){
                            return <div key={item.id} className="card hover-product col-3 m-3 rounded p-3 shadow-sm" style={{width: "18rem"}}>
                            <img src={item.img} className="card-img-top" style={{objectFit:'cover'}} height="250px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text"><span className="text-danger me-1">{item.price}</span><b>VNĐ</b></p>
                                <Link to={`/product/${item.id}`} className="btn btn-primary">Chi tiết</Link>
                            </div>
                        </div>
                        }
                        return;
                    })}
                </div>
            </div>
            
            <div className="pt-4 " style={{marginBottom:"5rem"}}>
                <h2>
                    Các tin tức nổi bật
                </h2>

                <div className="row mx-auto">
                    <div className="col-md-3 px-3 mx-4 bg-light border">
                        <div>
                            <img className="w-100 py-3 rounded" src="https://cly.1cdn.vn/thumbs/540x360/2021/01/08/violet-15-(1).jpg" alt="" />
                        </div>
                        <div>
                            <h6>
                            Violet Shop: Thương hiệu thời trang hợp mốt dành cho phái đẹp
                            </h6>
                            <p className="text-left ms-3">Thời gian : 1/12/2021</p>
                        </div>
                    </div>
                    <div className="col-md-4 px-3 mx-4 bg-light border">
                        <div>
                            <img className="w-100 py-3 rounded" src="https://1.bp.blogspot.com/-_hKc8WlL6wY/X3rSFm1_ksI/AAAAAAAACkI/8MBVTz8N0LIWoGi2yj58Hs21X98SxzyHwCNcBGAsYHQ/s600/Kinh-nghiem-mua-ke-treo-quan-ao-lap-ghep-gia-re-chat-luong.jpg" alt="" />
                        </div>
                        <div>
                            <h6>
                            Violet Shop: Thương hiệu thời trang hợp mốt dành cho phái đẹp
                            </h6>
                            <p className="text-left ms-3">Thời gian : 1/12/2021</p>
                        </div>
                    </div>
                    <div className="col-md-3 px-3 mx-4 bg-light border">
                        <div>
                            <img className="w-100 py-3 rounded" src="https://sieuthigiake.com/img/mau-sao-treo-quan-ao-shop-pho-bien-hien-nay.jpg" alt="" />
                        </div>
                        <div>
                            <h6>
                            Violet Shop: Thương hiệu thời trang hợp mốt dành cho phái đẹp
                            </h6>
                            <p className="text-left ms-3">Thời gian : 1/12/2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeClient
