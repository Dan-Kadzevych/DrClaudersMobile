import { fetchProducts, fetchCategories } from 'apis/wooCommerce/requests';
import actions from './actions';

export const getProducts = () => async (
  dispatch: import('redux').Dispatch,
): Promise<void> => {
  try {
    dispatch(actions.getProductsAsync.request());

    const response = await fetchProducts();

    dispatch(actions.getProductsAsync.success(response.data));
  } catch (e) {
    dispatch(actions.getProductsAsync.failure(e));
  }
};

export const getCategories = () => async (
  dispatch: import('redux').Dispatch,
): Promise<void> => {
  try {
    dispatch(actions.getCategoriesAsync.request());

    const response = await fetchCategories();

    dispatch(actions.getCategoriesAsync.success(response.data));
  } catch (e) {
    dispatch(actions.getCategoriesAsync.failure(e));
  }
};

export default { getProducts, getCategories } as const;
