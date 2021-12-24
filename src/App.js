import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";
import { useEffect, useState } from "react";
import {Button} from "react-bootstrap";
import LayoutWebsite from './layout/LayoutWebsite';
import Products from './pages/client/products';
import { create, list, remove, update } from './api/productAPI';
import ProductDetail from './pages/client/products/ProductDetail';
import LayoutAdmin from './layout/LayoutAdmin';
import AminProducts from './pages/admin/products';
import AddProduct from './pages/admin/products/AddProduct';
import UpdateProduct from './pages/admin/products/UpdateProduct';
import AdminCategory from './pages/admin/categories';
import { createCategory, listCategory, removeCategory, updateCategory } from './api/categoriesAPI';
import PrivateAdmin from './components/PrivateAdmin';
import Signup from './pages/client/products/Signup';
import Signin from './pages/client/products/Signin';
import HomeClient from './pages/client/home';
import AddCategory from './pages/admin/categories/AddCategory';
import UpdateCategory from './pages/admin/categories/UpdateCategory';
import { toast, ToastContainer } from 'react-toastify';
import Blog from './pages/client/blog/index'
import Dashboard from './pages/admin/dashboard';
import CategoryPage from './pages/client/category';
import Cart from './pages/client/cart';
function App() {
  const [products, setProducts] = useState([]);
  const [category,setCategory]= useState([]);
  const [cart,setCart]=useState(localStorage.getItem('cart')?JSON.parse( localStorage.getItem('cart')):[]);
  

  const getProducts = async () => {
    const {data} = await list();
    setProducts(data);
    
  }
  useEffect( () => {
    getProducts()
   
  }, []);
  
  const getCategory = async () =>{
    const categoryData = await listCategory();
    setCategory(categoryData.data);
   

  }
  useEffect( () =>{
    getCategory()
  },[]);
///* Product*//////
  const handleRemoveProduct = async (id) => {
    const confirm = window.confirm("Bạn chắc chắn muốn xóa sản phẩm!.")
    if(confirm){
      const {data} = await remove(id);
      const newProducts = products.filter(item => item.id !== id);
      setProducts(newProducts)
      toast.success('Xóa sản phẩm thành công!');
    }
  }
  const handleAddPoduct = (data) => {
    create({...data, view: 0}).then((response)=>{
      setProducts([...products, response.data])
    })
    toast.success('Thêm mới sản phẩm thành công!');
  };
  const handleUpdateProduct = (data) => {
    const newProductUpdate = products.filter( item => item.id !== data.id);
   
    update(data).then((response)=>{
      setProducts([...newProductUpdate,response.data])
    })
    toast.success('Cập nhật sản phẩm thành công!');
    
  }
  ///*End Product*/////




  ///*Category*/////
  const handleRemoveCategory = async (id) => {
    const confirm = window.confirm("Bạn chắc chắn muốn xóa danh mục!.")
    if(confirm){
      const {data} = await removeCategory(id);
      const newCategory = category.filter(item => item.id !== id);
      setCategory(newCategory)
      toast.success('Xóa danh mục thành công!');
      
    }
  }
  const handleAddCategory = (data) => {
    createCategory(data).then(res => setCategory([...category, res.data]))
    
  };
  const handleUpdateCategory = (data) => {
    const newData = category.filter( item => item.id !== data.id);
    updateCategory(data).then(res => setCategory([data, ...newData]))
    toast.success('Cập nhật danh mục thành công!');
  }
  ///* End Category */////
  const handleAddtocart = (id)=>{
    const checkExisted= cart.filter(item=>item.id==id);
    if(checkExisted.length===0){
      const newCart= products.filter(item=>item.id==id)[0];
      setCart([...cart,{...newCart,count:1}])
      localStorage.setItem('cart',JSON.stringify([...cart,{...newCart,count:1}]));
    }else{
      const newCart={...checkExisted[0],count:checkExisted[0].count+1};
      const cartExisted = cart.filter(item=>item.id!==id);
      setCart([...cartExisted,newCart])
      localStorage.setItem('cart',JSON.stringify([...cartExisted,newCart]));
    }
    
  }
  
 

  return (
    <div className="App">
      
      <ToastContainer />
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutWebsite category={category} cart={cart}/>} >
          <Route index element={<HomeClient products={products} handleAddtocart={handleAddtocart}/>} />
          <Route path="/product" element={<Products category={category} products={products}/>} />
          <Route path="/product/:id"  element={<ProductDetail category={category} />} />
          <Route path="/category/:id" element={<CategoryPage/>} />
          <Route path="/tin-tuc" element={<Blog/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/cart" element={<Cart/>} />
        </Route>

        <Route path="/admin" element={
         <PrivateAdmin abc="123">
           <LayoutAdmin/>
         </PrivateAdmin>

        } >
          <Route index element={<Dashboard  category={category} products={products}/>} />
          <Route path="/admin/categories/add"  element={<AddCategory handleAddCategory={handleAddCategory} />} />
          <Route path="/admin/categories/:id/update"  element={<UpdateCategory  category={category} handleUpdateCategory={handleUpdateCategory} />} />
          <Route path="/admin/categories"  element={<AdminCategory category={category} handleRemoveCategory={handleRemoveCategory} />} />
          <Route path="/admin/product/:id/update" element={<UpdateProduct category={category} products={products} handleUpdateProduct={handleUpdateProduct} />} />
          <Route path="/admin/product/add" element={<AddProduct category={category} handleAddPoduct={handleAddPoduct} />} />
          <Route path="/admin/products" element={<AminProducts products={products} category={category} handleRemoveProduct={handleRemoveProduct} />} />
        </Route>
      </Routes>
    </BrowserRouter>
     
    
    </div>
      
  );
}

export default App;
