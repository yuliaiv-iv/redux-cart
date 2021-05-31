import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = (props) => {

  const cartItems = useSelector(state => {
    return state.cart.items;
  })

  console.log(cartItems)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((i) => (
          <CartItem
            key={i.id}
            item={{
              id: i.id,
              title: i.name,
              qty: i.qty,
              total: i.totalPrice,
              price: i.price
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
