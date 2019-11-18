import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import { connect } from 'react-redux';


class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._map = React.createRef();
  }

  componentDidMount() {
    const {
      offers,
      current,
    } = this.props;

    const city = current.coords;
    console.log(this.props.current)
    const zoom = 12;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(this._map.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });
    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    offers.map((offer) => {
      leaflet
      .marker(offer.coords, {icon})
      .addTo(map);
    })
  }

  render() {
    return (
      <div className="cities__map map" ref={this._map}></div>
    );
  }
}


Map.propTypes = {

};

const mapStateToProps = (state) => ({
  current: state.currentCity,
  offers: state.currentOffers,
});

export default connect(mapStateToProps)(Map);
