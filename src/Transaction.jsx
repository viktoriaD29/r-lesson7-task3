import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time, id }) => {
  const amountNum = new Intl.NumberFormat('en-GB').format(amount);
  const date = moment(time).format('D MMM');
  const timeNum = moment(time).format('h:mm');

  return (
    <li className="transaction">
      <span className="transaction__date">{date}</span>
      <span className="transaction__time">{timeNum}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{amountNum}</span>
    </li>
  );
};

export default Transaction;
