import { Product as ProductType } from '../ProductList/types';
import Heart from '../../assets/heart-svgrepo-com.svg';
import './styles.css';

type Props = {
  data: ProductType;
};

const Product = (props: Props) => {
  const { name, brand, availability, photo } = props.data;
  return (
    <div className="snap-start w-[250px] p-4 text-left hover:border-2 border-neutral-300 container relative">
      <button className="absolute top-7 right-7 size-8 invert z-10">
        <img src={Heart} />
      </button>
      <div className="relative">
        <img className="h-64 object-cover max-w-[stretch] mb-1" src={photo} alt="product-img" />
        <div className="absolute bottom-2 left-3 invisible product-details">
          <a href="#" className="underline underline-offset-4 text-white text-lg">
            Product Details
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <div>{name}</div>
        <span>$$$</span>
      </div>
      <div className="text-sm">{brand}</div>
      <div className="flex justify-between pt-1">
        <div className="text-xs">
          {availability && (
            <div className="flex items-center">
              <div className="rounded-full w-1 p-1 bg-green-400 mr-1" />
              Available now 2650
            </div>
          )}
        </div>
        <div className="text-xs flex items-center">
          <span className="pr-1">Compare</span>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default Product;
