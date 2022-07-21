import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { increment, decrement } from '../store/Stock'

function App() {
  const dispatch = useDispatch()
  const stock = useSelector<RootState>(state => state.stock)

  return (
    <div className="App">
      <h1>Redux + React + TS</h1>
      <div className="card">
        <>
          {stock}
          <button
            onClick={() => dispatch(increment())}>increment</button>
          <button onClick={() => dispatch(decrement())}>decrement</button>
        </>
      </div>
    </div>
  )
}

export default App
