import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddCategory = ({handleAddCategory}) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState:{errors}
        }=useForm();

    const onSubmit = (data) => {
        handleAddCategory(data);
        navigate('/admin/categories')
        toast.success('them thanh cong');
    };
    return (
        <>
        <div className="d-flex justify-content-between">
            <h1>Thêm mới danh mục</h1>

            <div></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label" >Tên danh mục</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" {...register("name",{required:true})} laceholder="Name product" />
                </div>
            </div>  
            
            <button className="btn btn-primary">Add</button>
        </form> 
        </>
    )
}

export default AddCategory
