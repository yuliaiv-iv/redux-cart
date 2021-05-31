import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {
    id: 1,
    price: 5,
    title: 'First Book',
    description: 'Amazing book!'
  },
  {
    id: 2,
    price: 7,
    title: 'Second Book',
    description: 'The best book ever!'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((p) => (
          <ProductItem
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            description={p.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
