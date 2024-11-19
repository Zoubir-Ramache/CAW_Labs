import {useState} from 'react'
import DisplayTabWithProps from './ex4'

function DisplayTwoTabs() {
    const firstTab = ["hello", "world", "from", "react"]
    const secondTab = ["learning", "react", "is", "fun"]

    return (
        <div>
            <h2>First Table</h2>
            <DisplayTabWithProps tab={firstTab} />
            
            <h2>Second Table</h2>
            <DisplayTabWithProps tab={secondTab} />
        </div>
    )
}

export default DisplayTwoTabs
