const depositIcon = require('../../assets/icons/deposit-icon.png');
const withdrawalIcon = require('../../assets/icons/withdrawal-icon.png');
const memoji = require('../../assets/icons/memoji.png');
const failedDeposit = require('../../assets/icons/deposit-failed.png');
const transferIcon = require('../../assets/icons/transfer-icon.png');
const pendingIcon = require('../../assets/icons/pending-icon.png');

const data = [
  {
    title: 'Deposit',
    time: 'Apr 28, 2020',
    amount: '+ $2,605',
    image: depositIcon,
    status: 'completed',
  },
  {
    title: 'Withdrawal',
    time: 'Apr 26, 2020',
    amount: '- $48',
    image: withdrawalIcon,
    status: 'completed',
  },
  {
    title: 'Transfer to Eke',
    time: 'Apr 21, 2020',
    amount: '- $26',
    image: memoji,
    status: 'completed',
  },
  {
    title: 'Deposit',
    time: 'Apr 28, 2020',
    amount: '$200',
    image: failedDeposit,
    status: 'failed',
  },
  {
    title: 'Transfer to Plan',
    time: 'Apr 26, 2020',
    amount: '- $92',
    image: transferIcon,
    status: 'completed',
  },
  {
    title: 'Transfer to Bank Account',
    time: 'Apr 21, 2020',
    amount: '- $200',
    image: pendingIcon,
    status: 'pending',
  },
];

export default data;
