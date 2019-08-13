import React, { useContext, useEffect } from 'react';
import BillsContext from '../../context/bills-context'
import BillList from '../BillList.jsx'

const Home = () => {
  const { state, dispatch } = useContext(BillsContext);

  useEffect(() => {
    fetch('/bills')
      .then(res => res.json())
      .then(json => {
        let bills = json.filter(bill => bill.username === state.username);
        dispatch({ type: 'GET_BILLS', bills })
      })
  }, [state.loggedIn])

  return (
    <div>
      <h1>Home page</h1>
      <BillList />
    </div>
  )
}

export default Home;