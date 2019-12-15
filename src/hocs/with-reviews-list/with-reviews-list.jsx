import React, {PureComponent} from 'react';

import api from '../../api.js';


export function withReviewsList(Component, data) {
  return class Wrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        reviews: [],
      };
    }

    componentDidMount() {
      api.get(`/comments/${this.props.id}`).then((response) => this.setState({reviews: response.data}));
    }

    render() {
      return (
        <Component {...this.props} reviews={this.state.reviews} id={data}/>
      );
    }
  };
}

