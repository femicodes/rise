import { walletConstants } from '../constants';

const addOperation = (data: string) => ({
  type: walletConstants.ADD_MONEY,
  payload: data,
});

export const addMoney = (amount: string) => (dispatch: any) => {
  dispatch(addOperation(amount));
};
