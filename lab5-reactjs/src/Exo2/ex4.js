import {useState} from 'react'

function DisplayTabWithProps({tab}) {
    return (
        <div>
            <ul>
                {tab.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayTabWithProps
