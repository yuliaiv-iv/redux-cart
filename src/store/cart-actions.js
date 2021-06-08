import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const getCartData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch('https://books-6064e-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw new Error('Could not get cart data!');
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await getData();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQty: cartData.totalQty,
      }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Something went wrong... Try later',
        }),
      );
    }
  }
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }),
    );

    const sendRequest = async () => {
      const response = await fetch('https://books-6064e-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error('Sending cart data failed!');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Cart data successfully updated!',
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Something went wrong... Try later',
        }),
      );
    }
  }
}