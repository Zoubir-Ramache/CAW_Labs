import React from 'react'

export default function Ex1() {
    const [paragraph, setparagraph] = React.useState(false)
  return (
    <div>
        <button onClick={()=>setparagraph(true)}>click me </button>
        {paragraph && "clicked "}


    </div>
  )
}
