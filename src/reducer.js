
const initialState = {
  currentOffers: [],
  cities: [],
  hotels: [],
  currentCity: null,
  isAuthorizationRequired: false,
};

const getHotels = () => {
  return ((dispatch, getState, api) =>
    api.get(`/hotels`).then((response) => dispatch(ActionCreator.addHotels(response.data)))
  );
};


const logIn = (login, pass) => {
  return ((dispatch, getState, api) =>
    api.post(`/login`, {email: login, password: pass}).then((response) => dispatch(ActionCreator.logIn(response.data))
    // error => dispatch(ActionCreator.wrongPass(response.data))
    )
  );
};

const getAuthorization = () => {
  return ((dispatch, getState, api) =>
    api.get(`/login`).then((response) => dispatch(ActionCreator.getToken(response.data))

        // error => dispatch(ActionCreator.wrongPass(response.data))
    )
  );
};


const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  ADD_HOTELS: `ADD_HOTELS`,
  LOG_IN: `LOG_IN`,
  FILTER_OFFERS: `FILTER_OFFERS`,
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
  signIn: () => ({
    type: ActionType.LOG_IN,
    payload: true,
  }),
  getToken: () => ({
    type: ActionType.LOG_IN,
    payload: true,
  }),
  getHotels,
  logIn,
  getAuthorization,
  filterOffers: (id) => ({
    type: ActionType.FILTER_OFFERS,
    payload: id,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: return Object.assign({}, state, {
      currentCity: state.hotels.find((city) => city.city.name === action.payload),
      currentOffers: state.hotels.filter((offer) => offer.city.name === action.payload),
    });
    case ActionType.ADD_HOTELS: return Object.assign({}, state, {
      hotels: action.payload,
      currentCity: action.payload.length ? action.payload[0].city : null,
      currentOffers: action.payload.length ? action.payload.filter((offer) => offer.city.name === action.payload[0].city.name) : null,
      cities: [...new Set(action.payload.map((city) => city.city.name))],
    });
    case ActionType.LOG_IN: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload,
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
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  reducer,
};

