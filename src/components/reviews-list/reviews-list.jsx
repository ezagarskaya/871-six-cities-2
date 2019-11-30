import React from 'react';
import Review from '../review/review.jsx';

const ReviewsList = (props) => {
  // console.log(props)
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">
        {props.reviews.length}
      </span></h2>
      <ul className="reviews__list">
        {
          props.reviews.map((review) => <Review key={review.id} review={review} />)
        }
      </ul>
    </section>
  );
};

export default ReviewsList;
