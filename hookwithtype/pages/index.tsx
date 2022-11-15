import type { NextPage } from 'next'
import { useState } from 'react'
import { useReducer } from 'react';

interface stateObj {
  num: number;
}

interface actionObj {
  type: 'PLUS' | 'MINUS' | 'MULTI' | 'DIVIDE';
}

type reduceFunc = {
  (x: number, y: actionObj): number;
}

// type 자동완성이 가능하다.
// type Action =
//   | { type: 'PLUS' }
//   | { type: 'MINUS' }
//   | { type: 'MULTI' }
//   | { type: 'DIVIDE' }

const Reducer: reduceFunc = (state: number, action: actionObj): number => {
  switch (action.type) {
    case 'PLUS':
      return state + 1;
    case 'MINUS':
      return state - 1;
    case 'MULTI':
      return state * 2;
    case 'DIVIDE':
      return state / 2;
    default:
      return state;
  }
}

const Home: NextPage = () => {
  const [num, setNum] = useState<number>(0);
  const [rNum, dispatch] = useReducer(Reducer, 0);
  console.log(rNum);
  return (
    <div>
      <button type="button" onClick={() => (setNum(prev => prev + 1))}>+1</button>
      <button type="button" onClick={() => (setNum(prev => prev - 1))}>-1</button>
      <div>
        <strong>{num}</strong>
      </div>
      <button type="button" onClick={() => (dispatch({ type: 'PLUS' }))}>+1</button>
      <button type="button" onClick={() => (dispatch({ type: 'MINUS' }))}>-1</button>
      <button type="button" onClick={() => (dispatch({ type: 'MULTI' }))}>*2</button>
      <button type="button" onClick={() => (dispatch({ type: 'DIVIDE' }))}>/2</button>
      <div>
        <strong>{rNum}</strong>
      </div>
    </div>
  )
}

export default Home
