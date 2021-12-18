import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';


const UpdateCategory = ({ category, handleUpdateCategory}) => {
    const { id } = useParams();
    const cate = category.filter( i => i.id === Number(id))[0];
    console.log(cate)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState:{errors}
        }=useForm();

    const onSubmit = (data) => {
        handleUpdateCategory({...data, id: parseInt(id)});
        navigate('/admin/categories')
    };

    return (
        <>
            <div className="d-flex justify-content-between">
                <h1>Cập nhật danh mục</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label" >Tên danh mục</label>
                    <div className="col-sm-10">
                        <input type="text" defaultValue={cate.name} className="form-control" {...register("name",{required:true})} laceholder="Name product" />
                    </div>
                </div>  
                
                <button className="btn btn-primary">Cập nhật</button>
            </form> 
        </>
    )
}

export default UpdateCategory
