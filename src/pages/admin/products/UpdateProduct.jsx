import React, { useState } from 'react'
import { useParams } from 'react-router'
import { read, update } from '../../../api/productAPI';
import { useNavigate } from 'react-router-dom';
import { useForm} from 'react-hook-form';
 
const UpdateProduct = ({products, handleUpdateProduct, category}) => {
    
    
    const { id } = useParams();

    const [product, setProduct] = useState(products.filter(item=>item.id==id)[0]);
    console.log(product)
  
    const {register,
        handleSubmit,
        formState:{errors}
        } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        const dataUpdate ={
            id:parseInt(id),
            ...data
        }   
      
        handleUpdateProduct(dataUpdate);
        navigate('/admin/products')
        // console.log(dataUpdate)
    }
   
    return (
        <>
        <div className="d-flex justify-content-between">
            <h1>Cập nhật sản phẩm</h1>

            <div></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label" >Danh mục</label>
                <div className="col-sm-10">
                    <select class="form-select" {...register('id_category', { required: true})}>
                        {category.map( item => <option key={item.id} value={item.id}>{item.name}</option>)}
                    </select>
                </div>
            </div> 
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label" >Tên sản phầm</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" defaultValue={product.name} {...register("name",{required: "Vui lòng nhập tên sản phẩm"})} laceholder="Name product" />
                    <span className="text-danger">{errors.name && errors.name.message}</span>
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Ảnh</label>
                <div className="col-sm-10">
                    <input type="text"  className="form-control" defaultValue={product.img} {...register("img",{required: "Vui lòng thêm ảnh"})} aceholder="Link image product" />
                    <span className="text-danger">{errors.img && errors.img.message}</span>
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Giá</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" defaultValue={product.price} {...register("price",{required: "Vui lòng thêm giá"})} placeholder="Price product" />
                    <span className="text-danger">{errors.price && errors.price.message}</span>
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Mô tả sản phẩm</label>
                <div className="col-sm-10">
                    <textarea type="text" className="form-control" defaultValue={product.desc} {...register("desc",{required: "Vui lòng thêm mo tả sản phẩm"})} placeholder="Mô tả sản phẩm" />
                    <span className="text-danger">{errors.desc && errors.desc.message}</span>
                </div>
            </div> 
            
            <button className="btn btn-primary">Cập nhật</button>
        </form> 
        </>
    )
}

export default UpdateProduct
