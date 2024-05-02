
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../Redux/Counterslice';
const Counter = () => {
    const count = useSelector(function(state){
        return state.counter.value
    })
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <p>{count}</p>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(incrementByAmount())}>incrementByAmount</button>
    </div>
  )
}

export default Counter;