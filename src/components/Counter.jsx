import { useSelector, useDispatch } from "react-redux";
import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT } from "../modules/counter";
import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(1);
  const count = useSelector((state) => { 
    return state.counter.value;
  })
  const dispatch = useDispatch();
  const onClickCounterPlus = () => { 
    dispatch(INCREMENT());
  }
  const onClickCounterMinus = () => { 
    dispatch(DECREMENT());
  }
  const onChangeInput = (e) => { 
    setNum(e.target.value);
  }
  const onClickCounterInput = () => {
    setNum('')
    dispatch(INCREMENT_BY_AMOUNT(parseInt(num)))
  }
  return (
    <div>
      <h1>카운터</h1>
      <h2>{count}</h2>
      <input type='number' onChange={onChangeInput} value={num} />
      <button onClick={onClickCounterInput}>증가</button>
      <button onClick={onClickCounterPlus}>+1</button>
      <button onClick={onClickCounterMinus}>-1</button>
    </div>
  );
}
 
export default Counter;