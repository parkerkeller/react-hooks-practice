import React, { useReducer, useEffect } from 'react';
import Main from './Main.jsx';
import BillsContext from '../context/bills-context';
import billsReducer from '../reducers/bills-reducer';
import initialState from '../reducers/bills-state'

const App = () => {
  const [state, dispatch] = useReducer(billsReducer, initialState)

  return (
    <>
      <BillsContext.Provider value={{ state, dispatch }}>
        <Main />
      </BillsContext.Provider>
    </>
  )

}

export default App;