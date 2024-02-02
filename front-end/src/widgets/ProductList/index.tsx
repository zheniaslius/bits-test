import Product from '../Product';
import { getProducts } from './api';
import { GET_PRODUCTS_URL } from '../../api';
import useSWR from 'swr';
import { ProductList as ProductListType } from './types';

const ProductList = () => {
  const { data, error } = useSWR(GET_PRODUCTS_URL, getProducts);

  const products: ProductListType | undefined = data as ProductListType;

  if (error) {
    return null;
  }

  return (
    <div>
      <h3 className="uppercase text-xs mb-3 font-bold">The innovation leader in luxury vinyl plank</h3>
      <h1 className="text-4xl font-light mb-3 capitalize">Lets get started</h1>
      <div className="snap-x overflow-x-auto flex">
        {products && products.map((product) => <Product key={product.id} data={product} />)}
      </div>
    </div>
  );
};

export default ProductList;
