
const initialState = {
  currentOffers: null,
  cities: [],
  hotels: [],
  currentCity: null,
  isAuthorizationRequired: false,
  reviews: [],
};

const getHotels = () => {
  return ((dispatch, getState, api) =>
    api.get(`/hotels`).then((response) => dispatch(ActionCreator.addHotels(response.data)))
  );
};

const getReviews = (id) => {
  return ((dispatch, getState, api) =>
    api.get(`/comments/${id}`).then((response) => dispatch(ActionCreator.addReviews(response.data)))
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
  LOAD_REVIEWS: `LOAD_REVIEWS`,
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
  getReviews,
  logIn,
  getAuthorization,
  addReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
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
    case ActionType.LOAD_REVIEWS: return Object.assign({}, state, {
      reviews: action.payload,
    });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  reducer,
};
