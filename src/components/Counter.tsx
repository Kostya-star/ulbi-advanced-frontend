import { useState } from 'react'
import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>count up</button>
      <button onClick={() => setCount(count - 1)}>count down</button>
    </div>
  )
}
