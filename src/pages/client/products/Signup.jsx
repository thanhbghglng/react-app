import React from 'react'
import { signup } from '../../../api/authAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { authenticate } from '../../../authenticate';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        console.log(data)
        signup(data).then((response)=>{
            console.log("Đăng ký",response.data);
            authenticate(response.data.user);
            toast.success('Đăng ký thành công');
            navigate("/signin");
        })
        .catch((error) => toast.error(error.response.data));
    }
    return (
        <div style={{marginTop:"10rem",marginBottom:"20rem"}}>
            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} style={{width:"450px"}} className="mx-auto border p-3 rounded">
            <div>
                <h2>Đăng ký</h2>
                <input type="email" className="form-control mb-4"  {...register('email')} placeholder="Email của bạn" />
            </div>
            <div>
                <input type="password" className="form-control" {...register('password')} placeholder="Mật khẩu" />
            </div>
            <button className="btn btn-primary mt-3">Đăng ký</button>
        </form>
            </div>
        </div>
       
    )
}

export default Signup;
