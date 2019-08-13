import React, { useContext, useEffect } from 'react';
import BillsContext from '../context/bills-context'

const BillList = () => {
  const { state } = useContext(BillsContext);

  const bills = [];


  for (let i = 0; i < state.bills.length; i++) {
    let bill = (
      <div key={state.bills[i].info}>
        <h3>Bill</h3>
        <p>{state.bills[i].info}</p>
        <p>{state.bills[i].price}</p>
      </div>
    );
    bills.push(bill);
  }




  return (
    <>
      {bills}
    </>
  )
}

export default BillList;