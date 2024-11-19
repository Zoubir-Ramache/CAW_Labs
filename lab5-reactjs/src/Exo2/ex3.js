import {useState} from 'react'

function DisplayTabWithRemove() {
    const [tab, setTab] = useState(["hello", "world", "from", "react"])

    const handleClick = (index) => {
        setTab(prev => prev.filter((_, i) => i !== index))
    }

    return (
        <div>
            <ul>
                {tab.map((item, index) => (
                    <li key={index} onClick={() => handleClick(index)}>
                        Element {index + 1} is: {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayTabWithRemove
