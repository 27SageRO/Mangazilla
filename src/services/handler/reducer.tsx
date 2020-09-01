import actions from './actions';

const initialState: Handler = {
  error: null,
};

export default (state = initialState, action: any) => {
  const {type, err} = action;

  switch (type) {
    case actions.constants.ERROR:
      return {...state, err};
    default:
      return state;
  }
};
