// import Image from '../compoents/Image.jsx'
import Navber from '@/compoents/Navber'
import React from 'react'
import Image from 'next/image'
import my from "../../public/image/m.jpeg"
import FetchData from '@/compoents/FetchData'


async function page() {
  return (
    <div>
      {/* <Navber/> */}
      {/* <Image/> */}

      {/* <Image src={my} width={200} height={200}/> */}
      <FetchData/>
    </div>
  )
}

export default page