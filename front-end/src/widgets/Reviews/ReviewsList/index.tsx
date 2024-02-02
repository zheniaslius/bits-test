import React from 'react';
import { Review as ReviewType } from '../types';
import Review from './Review';

type Props = {
  data: ReviewType[];
};

const ReviewsList = ({ data }: Props) => {
  return (
    <div>
      {data.map((review: ReviewType) => (
        <Review key={review.id} data={review} />
      ))}
      <div className="flex justify-start">
        <button className="uppercase underline font-semibold text-sm mb-16">Read all reviews</button>
      </div>
    </div>
  );
};

export default ReviewsList;
