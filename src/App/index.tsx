import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { RootState } from '../store'
import { asyncIncrement, asyncDecrement } from '../store/Stock.store'

function App() {
  const dispatch = useDispatch()
  const stock = useSelector((state: RootState) => state.stock)

  return (
    <div className="App">
      <h1>Redux + React + TS</h1>
      <div className="card">
        <>
          {stock.count}
          <button onClick={() => dispatch(asyncIncrement(5))}>Increment</button>
          <button onClick={() => dispatch(asyncDecrement(-5))}>Decrement</button>
        </>
      </div>
    </div>
  )
}

export default App
