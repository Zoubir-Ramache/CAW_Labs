import {useState} from 'react'

function DisplayTabWithIndex() {
    const tab = ["hello", "world", "from", "react"]

    return (
        <div>
            <ul>
                {tab.map((item, index) => (
                    <li key={index}>Element {index + 1} is: {item}</li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayTabWithIndex
