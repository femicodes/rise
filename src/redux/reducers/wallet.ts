import initialState from './initialState';
import { walletConstants } from '../constants';

interface ActionProps {
  type: string;
  payload: string;
}

const walletReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case walletConstants.ADD_MONEY:
      return {
        ...state,
        walletBalance: Number(state.walletBalance) + Number(action.payload),
      };

    default:
      return state;
  }
};

export default walletReducer;
