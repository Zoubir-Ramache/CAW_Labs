import {useState} from 'react'

function Ex2() {
    const [toggle, settoggle] = useState(false)
  return (
    <div>
        <button onClick={()=>settoggle(prev=>!prev)}>  toggle </button>
        {toggle ? "clicked " : "not clicked "}

    </div>
  )
}

export default Ex2