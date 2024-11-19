import {useState} from 'react'

function Ex4() {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(prev => prev + 1)}>Inc</button>
            <button onClick={() => setCounter(prev => prev - 1)}>Dec</button>
        </div>
    )
}

export default Ex4
