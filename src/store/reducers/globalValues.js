import {
  TOGGLE_SPINER
} from '../actionNames/globalValues';

const initialStore = {
  showSpiner: false
};

export default (store = initialStore, { data, type } = {}) => {
  switch (type) {
    case TOGGLE_SPINER:
      return {
        ...store,
        showSpiner: data !== undefined ? data : !store.showSpiner
      };

    default:
      return store;
  }
};
