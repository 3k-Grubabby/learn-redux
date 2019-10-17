import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {incrment,decrment,login} from './actions'
import Login from './login'
import Main from './main'

function App() {
  const counter = useSelector(state=>state.counter)
  const isLogged = useSelector(state=>state.islogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
          <h1>counter{counter}</h1>
          <button onClick={()=>dispatch(incrment(5))}>+</button>
          <button onClick={()=>dispatch(decrment())}>-</button>

          <button onClick={()=>dispatch(login())}>login</button>
          { isLogged ?  <Main /> : <Login />}
         
    </div>
  );
}

export default App;
