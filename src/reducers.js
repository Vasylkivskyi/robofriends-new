import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  RECEIVE_ROBOTS_SUCCESS,
  RECEIVE_ROBOTS_FAILED,
} from './constants';

const initialStateSearch = {
  searchField: '',
};

export const searchRobots = (state = initialStateSearch, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: '',
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case RECEIVE_ROBOTS_SUCCESS:
      console.log(state);
      return { ...state, isPending: false, robots: action.payload };
    case RECEIVE_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
