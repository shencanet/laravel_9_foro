

import "./Counter.css"
import { useState, useEffect } from 'react'

export const Counter = ({interval, start}) => {

    const [count, setCount] = useState(start)

    return (
        <div className='countDesign'>
            <div className='buttonCounter' onClick={()=>setCount(count + interval)}>+</div>
            <div>{count}</div>
            <div className='buttonCounter' onClick={()=>setCount(count - interval)}>-</div>
        </div>
    )
}