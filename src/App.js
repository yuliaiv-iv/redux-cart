import { useEffect, Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/UI/Notification';
import { sendCartData, getCartData } from './store/cart-actions';

let isInitial = true;

function App() {

  const dispatch = useDispatch();

  const isShown = useSelector(state => {
    return state.ui.cartIsVisible
  });

  const notification = useSelector(state => {
    return state.ui.notification
  });

  const cart = useSelector(state => {
    return state.cart;
  });

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch])

  return (
    <Fragment>
      <Layout>
        {isShown && <Cart />}
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
