'use client'
import { useState } from "react"

export default function BtnMobileMenu(){

      const [rotate, setRotate] = useState(true)

      return(
            <button className=" w-10 h-10 flex flex-col justify-center items-center gap-1.5 p-3 border border-borders " onClick={() => setRotate(!rotate)} >
                  <div className={` w-4 h-px border border-whiteText ${rotate ?' rotate-45 translate-y-1 ' :' '} transition-all duration-150 `}></div>
                  <div className={` w-4 h-px border border-whiteText ${rotate ?' -rotate-45 -translate-y-1 ' :' '} transition-all duration-150  `}></div>
            </button>
      )
}