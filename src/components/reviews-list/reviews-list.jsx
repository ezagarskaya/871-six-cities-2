import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Review from '../review/review.jsx';
import api from '../../api.js';

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    }
  }

  componentDidMount() {

    console.log(this.props.id)
    console.log(this.state)
    api.get(`/comments/${this.props.id}`).then((response) => {console.log(response.data);
      this.setState({reviews: response.data})})
  }

  render () {
    console.log(this.state)
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">
        {this.state.reviews.length}
      </span></h2>
      <ul className="reviews__list">
        {
          this.state.reviews.map((review) => <Review key={review.id} review={review} />)
        }
      </ul>
    </section>
  );
  }
};

const mapStateToProps = (state) => ({
  offers: state.currentOffers,
});

export default connect(mapStateToProps)(ReviewsList);
