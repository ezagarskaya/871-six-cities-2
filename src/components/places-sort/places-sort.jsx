import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

const PlacesSort = (props) => {
  const openClassName = `places__options places__options--custom`;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => !props.isOpen ? props.dispatch(ActionCreator.openSort(true)) :
        props.dispatch(ActionCreator.openSort(false))}>
        {props.sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={ props.isOpen ? openClassName + ` places__options--opened` : openClassName}>
        <li className="places__option" onClick={() => props.dispatch(ActionCreator.sortPopular([false, `Popular`]))} tabIndex="0" >Popular</li>
        <li className="places__option" onClick={() => props.dispatch(ActionCreator.sortLowToHigh([false, `Price: low to high`]))} tabIndex="1">Price: low to high</li>
        <li className="places__option" onClick={() => props.dispatch(ActionCreator.sortHighToLow([false, `Price: high to low`]))} tabIndex="2">Price: high to low</li>
        <li className="places__option" onClick={() => props.dispatch(ActionCreator.sortTop([false, `Top rated first`]))} tabIndex="3">Top rated first</li>
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
  sortType: state.sortType,
  currentOffers: state.CurrentOffers,
});

export default connect(mapStateToProps)(PlacesSort);
