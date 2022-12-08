import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../api/fetchProducts';
import Error from '../error/Error';
import Header from '../header/header';
import Loading from '../loading/Loading';
import ProductList from './ProductList';

const ProductsListContainer = () => {
    const navigate = useNavigate();
    const {data,isLoading, isError} = useQuery(['products'], fetchProducts, {
        refetchOnMount:false,
        refetchOnWindowFocus:false,
        refetchOnReconnect: false,
    })
    const handleNavigateItem = (productId:number) => {
        navigate(`/products/${productId}`);
    }

    return (<>
    {isLoading && <Loading/>}
    {isError && <Error/>}
    {data && <>
        <ProductList products={data} handleNavigateItem={handleNavigateItem} />
    </>}
    </>
    )
}

export default ProductsListContainer;