import { TProduct } from '../../types/products';
import s from './Product.module.css';

type ProductProps = {
    item:TProduct;
}
const Product = ({item}:ProductProps) => {
    return <div className={s.item}>
        <img className={s.itemImg} src={item.image} alt="" />
        <section className={s.rightSection}>
            <h1 className={s.title}>{item.title}</h1>
            <h4 className={s.category}>{item.category}</h4>
            <h2 className={s.price}>{item.price}$</h2>
            <p className={s.desc}>{item.description}</p>
        </section>
    </div>
}

export default Product;