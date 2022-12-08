import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../api/fetchProducts';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import Product from './Product';

const ProductContainer = () => {
    const param = useParams();    
    const {data, isLoading, isError} = useQuery(['productId',param.id], ()=>fetchProductById(param!.id as string));
    
    return <>
        {isLoading && <Loading/>}
        {isError && <Error/>}
        {data && <Product item={data} />}        
    </>
}

export default ProductContainer;