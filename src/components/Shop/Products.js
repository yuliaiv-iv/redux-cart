import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {
    id: 1,
    price: 25,
    title: 'The Staub Cookbook',
    description: 'Crafted in France, Staub cast-iron cookware is prized by top chefs and home cooks around the world'
  },
  {
    id: 2,
    price: 18,
    title: 'Joy of Cooking',
    description: 'The most beloved recipes from past editions and includes quick, healthy recipes for the way we cook today'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h3 className={classes.title}>Choose your next favorite cookbook</h3>
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
