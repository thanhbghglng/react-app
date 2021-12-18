import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import { listCategory } from '../../api/categoriesAPI';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const [user, setUser] = useState(null);
    const [category,setCategory] = useState([]);
    const navigate = useNavigate();
    const getCategory = async () =>{
      const categoryData = await listCategory();
      setCategory(categoryData.data);
     
  
    }
    useEffect( () =>{
      getCategory()
    },[]);
      
  
    useEffect( () => {
      setUser(JSON.parse(localStorage.getItem('user')))
    }, [localStorage.getItem('user')])
  
    const logOut = () => {
      localStorage.removeItem("user");
      setUser(null)
      navigate('/signin');
    }
    return (
      
        <>
        <nav className="navbar navbar-expand-lg navbar-light py-3 fixed-top" style={{background:"#c3eeff"}}>
      <div className="container-fluid container">
        <Link className="navbar-brand" to="/"> <span className="text-danger font-weight-bold">T C</span>  shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item product-hover">
              <Link className="nav-link" to="/product">Sản phẩm</Link>
           
              <ul class="dropdown-menu product-hovered" aria-labelledby="dropdownMenuButton1">
                {category.map(item=><li className="dropdown-item"><Link to={`/category/${item.id}`} >{item.name}</Link></li> )}
               
                
              </ul> 
            </li>
            <li className="nav-item product-hover">
              <Link className="nav-link" to="/tin-tuc">Tin tức</Link>
            </li>
          </ul>
          <form className="d-flex mx-5">
            <input className="form-control me-2" type="search" style={{width:"350px"}} placeholder="Tìm kiếm ..." aria-label="Search" />
            <button className="" type="submit" style={{background:"none",border:"none"}}><img width="25" src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-14.png" alt="" /></button>
          </form>
          <ul className="navbar-nav">
          
           
           {user && user.id === 1 && <li className="nav-item">
             <Link to="/admin" className="nav-link text-primary me-2">Trang Admin</Link>
           </li>}
           {!localStorage.getItem('user') &&
            <>
            
            <li className="nav-item">
              <Link to="/signup" className="nav-link  btn btn-outline-secondary">Đăng ký</Link>
            </li> 
            <li className="nav-item">
              <Link to="/signin" className="nav-link btn text-white btn-primary ms-2">Đăng nhập</Link>
            </li> 
            </> }
            {user && <li className="nav-item">
              <button className="btn btn-danger" onClick={logOut}>Đăng xuất</button>
            </li> }
          </ul>
          <div>
            
          </div>
        </div>
      </div>
    </nav>
        </>
    )
}

export default Header
