import React from 'react';
import star from '../../../assets/iconmonstr-star-3.svg';

type Props = {
  rating: number;
};

const renderStars = (num: number) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(<img src={star} key={i} className="mr-1 text-cyan-700" />);
  }
  return result;
};

const Rating = ({ rating }: Props) => {
  return <div className="flex mb-4 size-4">{renderStars(rating)}</div>;
};

export default Rating;
