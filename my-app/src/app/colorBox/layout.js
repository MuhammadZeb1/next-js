"use client"
import { useState } from "react"
import colorBox from "./page"


const colorBoxLayout = ({childern,left,right}) => {

  const [change ,setchange] = useState(true)
  return (
    <div>
    {childern}
    <button onClick={()=>setchange(!change)}> change the slout</button>
    {
      change ? left : right
    }
    </div>
  )
}

export default colorBoxLayout