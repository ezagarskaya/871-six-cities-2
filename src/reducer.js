const initialState = {
  currentOffers: [],
  filteredOffers: [],
  sortType: `Popular`,
  cities: [],
  hotels: [],
  currentCity: null,
  isAuthorizationRequired: false,
  cardActive: null,
  isOpen: null,
  user: null,
};

const getHotels = () => {
  return ((dispatch, getState, api) =>
    api.get(`/hotels`).then((response) => dispatch(ActionCreator.addHotels(response.data)))
  );
};


const logIn = (login, pass) => {
  return ((dispatch, getState, api) =>
    api.post(`/login`, {
      email: login,
      password: pass
    }).then((response) => dispatch(ActionCreator.signIn(response.data)),
    // eslint-disable-next-line no-alert
        (error) => alert(`Wrong password or email`, error))
  );
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  ADD_HOTELS: `ADD_HOTELS`,
  LOG_IN: `LOG_IN`,
  FILTER_OFFERS: `FILTER_OFFERS`,
  CARD_ACTIVE: `CARD_ACTIVE`,
  OPEN_SORT: `OPEN_SORT:`,
  SORT_POPULAR: `SORT_POPULAR`,
  SORT_LOW: `SORT_LOW`,
  SORT_HIGHT: `SORT_HIGHT`,
  SORT_TOP: `SORT_TOP`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  addHotels: (hotels) => ({
    type: ActionType.ADD_HOTELS,
    payload: hotels,
  }),
  signIn: (user) => ({
    type: ActionType.LOG_IN,
    payload: user,
  }),
  logIn,
  getHotels,
  filterOffers: (id) => ({
    type: ActionType.FILTER_OFFERS,
    payload: id,
  }),
  getActive: (id) => ({
    type: ActionType.CARD_ACTIVE,
    payload: id,
  }),
  openSort: (bool) => ({
    type: ActionType.OPEN_SORT,
    payload: bool,
  }),
  sortLowToHigh: (arr) => ({
    type: ActionType.SORT_LOW,
    payload: arr,
  }),
  sortHighToLow: (arr) => ({
    type: ActionType.SORT_HIGHT,
    payload: arr,
  }),
  sortTop: (arr) => ({
    type: ActionType.SORT_TOP,
    payload: arr,
  }),
  sortPopular: (arr) => ({
    type: ActionType.SORT_POPULAR,
    payload: arr,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        currentCity: state.hotels.find((city) => city.city.name === action.payload),
        currentOffers: state.hotels.filter((offer) => offer.city.name === action.payload),
      });
    case ActionType.ADD_HOTELS:
      return Object.assign({}, state, {
        hotels: action.payload,
        currentCity: action.payload.length ? action.payload[0].city : null,
        currentOffers: action.payload.length ?
          action.payload.filter((offer) => offer.city.name === action.payload[0].city.name) : null,
        cities: [...new Set(action.payload.map((city) => city.city.name))],
      });
    case ActionType.LOG_IN:
      return Object.assign({}, state, {
        user: action.payload,
        isAuthorizationRequired: true,
      });
    case ActionType.FILTER_OFFERS: {
      const offer = state.hotels.find((hotel) => hotel.id === +action.payload);
      if (!offer) {
        return state;
      }
      const nearOffers = state.hotels.filter((hotel) => hotel.city.name === offer.city.name && hotel.id !== offer.id).slice(0, 3);
      return Object.assign({}, state, {
        currentOffers: [offer, ...nearOffers],
      });
    }
    case ActionType.CARD_ACTIVE:
      return Object.assign({}, state, {
        cardActive: action.payload,
      });
    case ActionType.OPEN_SORT:
      return Object.assign({}, state, {
        isOpen: action.payload,
      });
    case ActionType.SORT_TOP: {
      return Object.assign({}, state, {
        isOpen: action.payload[0],
        sortType: action.payload[1],
        filteredOffers: state.hotels.filter((offer) => offer.city.name === state.currentCity.name).sort((a, b) => b.rating - a.rating),
      });
    }
    case ActionType.SORT_HIGHT: {
      return Object.assign({}, state, {
        isOpen: action.payload[0],
        sortType: action.payload[1],
        filteredOffers: state.hotels.filter((offer) => offer.city.name === state.currentCity.name).sort((a, b) => b.price - a.price),
      });
    }
    case ActionType.SORT_LOW: {
      return Object.assign({}, state, {
        isOpen: action.payload[0],
        sortType: action.payload[1],
        filteredOffers: state.hotels.filter((offer) => offer.city.name === state.currentCity.name).sort((a, b) => a.price - b.price),
      });
    }
    case ActionType.SORT_POPULAR: {
      return Object.assign({}, state, {
        isOpen: action.payload[0],
        sortType: action.payload[1],
        filteredOffers: [],
      });
    }

  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  reducer,
};
