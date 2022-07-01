import { useState } from '@hookstate/core';
import globalState from "../store/global"
import Child from '../components/Child'
setInterval(() => globalState.set(p => p + 1), 3000)

export default function Home() {
  const state = useState(globalState);
  return <>
    <b>Counter value: {state.get()}</b> (watch +1 every 3 seconds) {' '}
    <button onClick={() => state.set(p => p + 1)}>Increment</button>
    <br />
    <Child />
  </>
}
