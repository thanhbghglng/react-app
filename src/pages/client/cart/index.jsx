import React, { useState } from 'react'

const Cart = () => {
    
    const [item,Setitem]=useState(localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]);
    let priceTotal=0;
    const total = (count,price)=>{
       let x = (count*price).toLocaleString('vi', {style : 'currency', currency : 'VND'});

        priceTotal+=(count*price);
        return x;

    }
    const handle=(id,type)=>{
        let newitem= item.map(i=>{
            if(i.id==id){
                if(i.count-1===0&& type=='-'){
                    return null;
                }
                return {...i,count:type=='-'?i.count-1:i.count+1};
            };
            return i;
        });
        const newi = newitem.filter(i=>i!==null);
        Setitem(newi);
        localStorage.setItem('cart',JSON.stringify(newi));
    }
    return (
        <div className='container '  style={{marginTop:'100px'}} >
            <table className="table table-striped">
                <thead>
                   <tr>
                       <th>id</th>
                       <th>Name</th>
                       <th>Price</th>
                       <th>Quantity</th>
                       <th colSpan={item.length}>Tong tien</th>
                   </tr>
                </thead>
                    <tbody>
                        {item.map(i=><>
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.price}</td>
                                <td> <button onClick={()=>handle(i.id,'-')} className="btn-primary">-</button>  {i.count} <button onClick={()=>handle(i.id,'+')} className="btn-danger">+</button>  </td>
                                <td>{total(i.count,i.price)}</td>
                            </tr>
                        </>)}
                        <tr>
                            <td colSpan={4}>Tong thiet hai</td>
                            <td>{priceTotal.toLocaleString('vi',{style:'currency',currency:'VND'})}</td>
                        </tr>
                    </tbody>
            </table>
        </div>
    )
}

export default Cart
