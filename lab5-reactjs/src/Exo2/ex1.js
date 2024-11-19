import {useState} from 'react'

function DisplayTab() {
    const tab = ["hello", "world", "from", "react"]

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

export default DisplayTab
