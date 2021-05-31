import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const getCartData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch('https://books-6064e-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw new Error('could not get cart data!');
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
        uiActions.showNitification({
          status: 'error',
          title: 'Error!',
          message: 'Sent cart data failed!',
        }),
      );
    }
  }
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNitification({
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
        throw new Error('Sending cart data failed');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNitification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNitification({
          status: 'error',
          title: 'Error!',
          message: 'Sent cart data failed!',
        }),
      );
    }
  }
}