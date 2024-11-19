import {useState} from 'react'

function UserList() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [users, setUsers] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsers(prev => [...prev, formData])
        setFormData({
            username: '',
            password: ''
        })
    }

    return (
        <div>
            <h2>Authentication</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Add User</button>
            </form>

            <div>
                <h3>User List:</h3>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            Username: {user.username}, Password: {user.password}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default UserList
