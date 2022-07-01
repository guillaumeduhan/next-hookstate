import { useState } from '@hookstate/core';
import globalState from "../store/global"

export default function Child() {
  const state = useState(globalState);
  return <>
    <b>Same counter value but in child: {state.get()}</b>
    <h1>State is global !</h1>
  </>
}
