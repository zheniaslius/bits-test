import { useState } from 'react';
import ReviewsList from './ReviewsList';
import LeaveReview from './LeaveReview';
import { mockReviews } from '../../../mock-tool/testData';
import { Review } from './types';

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(mockReviews);

  const addReview = (review: Review) => setReviews((prevReviews) => [...prevReviews, review]);

  return (
    <div className="bg-slate-100 p-10">
      <ReviewsList data={reviews} />
      <LeaveReview onAdd={addReview} />
    </div>
  );
};

export default Reviews;
