import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import { listCategory } from '../../api/categoriesAPI';
import { useNavigate } from 'react-router-dom';


const Header = ({cart}) => {
  const [countCart,SetcountCart]= useState(localStorage.getItem('cart')?JSON.parse( localStorage.getItem('cart')).length:0);
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
    useEffect (()=>{
          SetcountCart(localStorage.getItem('cart')?JSON.parse( localStorage.getItem('cart')).length:0);
    },[localStorage.getItem('cart')])
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
              <Link className="nav-link" to="/product">S???n ph???m</Link>
           
              <ul class="dropdown-menu product-hovered" aria-labelledby="dropdownMenuButton1">
                {category.map(item=><li className="dropdown-item"><Link to={`/category/${item.id}`} >{item.name}</Link></li> )}
               
                
              </ul> 
            </li>
            <li className="nav-item product-hover">
              <Link className="nav-link" to="/tin-tuc">Tin t???c</Link>
            </li>
          </ul>
          <form className="d-flex mx-5">
            <input className="form-control me-2" type="search" style={{width:"350px"}} placeholder="T??m ki???m ..." aria-label="Search" />
            <button className="" type="submit" style={{background:"none",border:"none"}}><img width="25" src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-14.png" alt="" /></button>
          </form>
          <ul className="navbar-nav">
          
           
           {user && user.id === 1 && <li className="nav-item">
             <Link to="/admin" className="nav-link text-primary me-2">Trang Admin</Link>
           </li>}
           {!localStorage.getItem('user') &&
            <>
            
            <li className="nav-item">
              <Link to="/signup" className="nav-link  btn btn-outline-secondary">????ng k??</Link>
            </li> 
            <li className="nav-item">
              <Link to="/signin" className="nav-link btn text-white btn-primary ms-2">????ng nh???p</Link>
            </li> 
            </> }
            {user && <li className="nav-item">
              <button className="btn btn-danger" onClick={logOut}>????ng xu???t</button>
            </li> }
            <Link to="/cart" className='btn btn-primary'>Cart <span>{countCart}</span></Link>
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
