import {useState} from 'react'

function Ex3() {
    const [clickedButton, setClickedButton] = useState(null)

    return (
        <div>
            <div>
                <button onClick={() => setClickedButton(1)}>Button 1</button>
                <button onClick={() => setClickedButton(2)}>Button 2</button>
                <button onClick={() => setClickedButton(3)}>Button 3</button>
            </div>
            <p>
                {clickedButton 
                    ? `Button ${clickedButton} was clicked`
                    : "No button clicked yet"}
            </p>
        </div>
    )
}

export default Ex3
