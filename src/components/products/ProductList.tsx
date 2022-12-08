import React from 'react';
import { TProduct, TProducts } from '../../types/products';
import s from './ProductList.module.css';

type ProductListProps = {
    products: TProducts;
    handleNavigateItem:(productId:number)=>void;
}
const ProductList = ({products, handleNavigateItem}:ProductListProps) => {

    return (
        <ul className={s.itemList}>
            {
                products.map((item:TProduct)=>{
                    return <li key={item.id} className={s.item} onClick={()=>handleNavigateItem(item.id)} >
                        <h3>{item.title}</h3>
                        <img className={s.itemImg} src={item.image} alt="" />
                        <h4>{item.price}</h4>
                    </li>
                })
            }
        </ul>
    )
}

export default ProductList;