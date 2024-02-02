import { Review as ReviewType } from '../types';
import Rating from './Rating';

type Props = {
  data: ReviewType;
};

const Review = (props: Props) => {
  const { name, rating, description, date } = props.data;
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-xl mb-2">{name}</h3>
      <time className="text-sm mb-2">{date}</time>
      <Rating rating={rating} />
      <p className="mb-3 text-left">{description}</p>
      <button className="uppercase underline font-semibold text-sm">Read more</button>
      <hr className="my-5 w-full" />
    </div>
  );
};

export default Review;
