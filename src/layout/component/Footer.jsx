import React from 'react'

const Footer = () => {
    return (
        <div className="d-none" style={{background:"#c3eeff",bottom:0}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h5 className="text-left"><span className="text-danger   font-weight-bold">T C</span>  shop</h5>
                        <p className="text-left">JT C Shop tự hào là thương hiệu thời trang Nam lớn tại Việt Nam với hàng trăm mẫu mã đẹp mắt. Tại đây cung cấp vô cùng đa dạng và phong phú đủ mọi sản phẩm với nhiều kiểu dáng</p>
                    </div>
                    <div className="col-lg-3 px-3">
                        <h5 className="text-left">Hõ trợ</h5>
                        <div>
                            <p className="text-left " >cách thức mua quần áo</p>
                            <p className="text-left">đặt hàng </p>
                            <p className="text-left">
                                    tư vấn khách hàng
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="text-left">Sản phẩm</h5>
                        <div>
                            <p className="text-left " >áo sơ mi nam</p>
                            <p className="text-left">quần jean </p>
                            <p className="text-left">
                                    thắt lưng nam 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="text-left">Tải app</h5>
                        <div>
                            <p className="text-left " ><img src="https://vnalert.vn/wp-content/themes/nextapp/images/store_badges/google-play.svg" alt="" /></p>
                            <p className="text-left"> <img src="https://vnalert.vn/wp-content/themes/nextapp/images/store_badges/google-play.svg" alt="" /> </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
