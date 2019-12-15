import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Review from '../review/review.jsx';

class ReviewsList extends PureComponent {
  render() {
    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">
          {this.props.reviews.length}
        </span></h2>
        <ul className="reviews__list">
          {
            this.props.reviews.map((review) => <Review key={review.id} review={review} />)
          }
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: state.currentOffers,
});

export default connect(mapStateToProps)(ReviewsList);
