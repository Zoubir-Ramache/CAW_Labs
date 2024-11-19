import { useState } from 'react'

function DivCreator() {
    const [formData, setFormData] = useState({
        width: '',
        height: '',
        backgroundColor: ''
    })
    const [divs, setDivs] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setDivs(prev => [...prev, formData])
        setFormData({
            width: '',
            height: '',
            backgroundColor: ''
        })
    }

    return (
        <div>
            <h2>Div Creator</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="width">Width (px):</label>
                    <input
                        type="number"
                        id="width"
                        name="width"
                        value={formData.width}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height (px):</label>
                    <input
                        type="number"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color:</label>
                    <input
                        type="text"
                        id="backgroundColor"
                        name="backgroundColor"
                        value={formData.backgroundColor}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Create Div</button>
            </form>

            <div>
                <h3>Created Divs:</h3>
                {divs.map((div, index) => (
                    <div
                        key={index}
                        style={{
                            width: `${div.width}px`,
                            height: `${div.height}px`,
                            backgroundColor: div.backgroundColor,
                            margin: '10px'
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default DivCreator
