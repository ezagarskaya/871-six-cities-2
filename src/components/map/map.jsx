import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import {connect} from 'react-redux';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._map = React.createRef();
    this.map = null;
  }

  componentDidMount() {
    const {
      offers,
      current,
    } = this.props;

    if (!current || !offers) {
      return;
    }

    const city = [current.location.latitude, current.location.longitude];
    const zoom = 12;

    const icon = leaflet.icon({
      iconUrl: ``,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(this._map.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });
    this.map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    offers.map((offer) => {
      if (offer.id === +this.props.id) {
        icon.options.iconUrl = `/img/pin-active.svg`;
        leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(this.map);
      } else {
        icon.options.iconUrl = `/img/pin.svg`;
        leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(this.map);
      }
    });
  }

  componentDidUpdate() {
    const {
      offers,
      current,
    } = this.props;

    if (!current || !offers) {
      return;
    }

    const city = [current.location.latitude, current.location.longitude];
    const zoom = 12;

    if (!this.map) {
      this.map = leaflet.map(this._map.current, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true,
      });
    } else {
      this.map.eachLayer((marker) => this.map.removeLayer(marker));
    }

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    const icon = leaflet.icon({
      iconUrl: ``,
      iconSize: [30, 30]
    });

    this.map.setView(city, zoom);

    offers.map((offer) => {
      if (offer.id === +this.props.id) {
        icon.options.iconUrl = `/img/pin-active.svg`;
        leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(this.map);
      } else {
        icon.options.iconUrl = `/img/pin.svg`;
        leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(this.map);
      }
    });
  }

  render() {
    return (
      <div style={{height: `100%`}} className="cities__map map" ref={this._map}></div>
    );
  }
}

const mapStateToProps = (state) => ({
  current: state.currentCity,
  offers: state.currentOffers,
});

// Map.propTypes = {
//   offers: PropTypes.array.isRequired,
//   current: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps)(Map);
