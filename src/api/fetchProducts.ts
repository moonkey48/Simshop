import axios from 'axios'

export const fetchProducts = async () => {
    return axios('https://fakestoreapi.com/products')
    .then(res=>res.data.map((item:any)=>{
        return {
            id:item.id,
            title:item.title,
            price:item.price,
            description:item.description,
            category:item.category,
            image:item.image
        }
    }));
}
export const fetchProductById = async (id:string) =>{
    return axios(`https://fakestoreapi.com/products/${id}`)
    .then(res=>{
        return {
            id:res.data.id,
            title:res.data.title,
            price:res.data.price,
            description:res.data.description,
            category:res.data.category,
            image:res.data.image
        }
    });
}