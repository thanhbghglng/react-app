import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = ({ handleAddPoduct, category }) => {
    
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState:{errors}
        }=useForm();

    const onSubmit = (data) => {
        handleAddPoduct(data);
        navigate('/admin/products')
    };
    console.log(errors)
    return (
        <>
        <div className="d-flex justify-content-between">
            <h1>Thêm mới sản phẩm</h1>

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
                    <input type="text" className="form-control" {...register("name",{required: "Vui lòng nhập tên sản phẩm"})} laceholder="Name product" />
                    <span className="text-danger">{errors.name && errors.name.message}</span>
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Ảnh</label>
                <div className="col-sm-10">
                    <input type="text"  className="form-control" {...register("img",{required: "Vui lòng thêm ảnh"})} aceholder="Link image product" />
                    <span className="text-danger">{errors.img && errors.img.message}</span>
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Giá</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" {...register("price",{required: "Vui lòng thêm giá"})} placeholder="Price product" />
                    <span className="text-danger">{errors.price && errors.price.message}</span>
                </div>
            </div> 
            
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Mô tả sản phẩm</label>
                <div className="col-sm-10">
                    <textarea type="text" className="form-control" {...register("desc",{required: "Vui lòng thêm mo tả sản phẩm"})} placeholder="Mô tả sản phẩm" />
                    <span className="text-danger">{errors.desc && errors.desc.message}</span>
                </div>
            </div> 
            
            <button className="btn btn-primary">Thêm mới</button>
        </form> 
        </>
    )
}

export default AddProduct
