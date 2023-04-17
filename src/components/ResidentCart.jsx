import axios from 'axios'
import React, { useEffect, useState } from 'react'

const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
}

const ResidentCart = ({resident}) => {
    const [residentInfo, setResidentInfo] = useState()

    
    
    useEffect(()=>{
        axios.get(resident)
        .then((res)=>setResidentInfo(res.data))
        .catch((err)=>console.log(err))
    }, [])
  return (
    <article className={`card rounded-2xl  shadow-inner shadow-slate-700 border border-slate-700 ${
            residentInfo?.status === "Alive"
              ? `hover:border-green-500 hover:border-4`
              : residentInfo?.status == "unknown"
              ? `hover:border-slate-500 hover:border-4`
              : `hover:border-red-500 hover:border-4` 
          } hover:cursor-pointer overflow-hidden`}>
        <div className='relative'>
            <img className='rounded-2xl w-full shadow-md' src={residentInfo?.image} alt="" />
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#020A02]/60 text-white p-1 px-2 flex gap-2 items-center'>
                <div className={`w-3 h-3 ${residentStatus[residentInfo?.status]} rounded-full`}></div>
                <span>{residentInfo?.status}</span>
            </div>        
        </div>
        <section className='card-body'>
            <h2 className='font-bold'>{residentInfo?.name}</h2>
            <ul className="text-left gap-1">
                <li>
                    <h3 className='font-bold'>Species: </h3>
                    <span className>{residentInfo?.species}</span>
                </li>
                <li>
                    <h3 className='font-bold'>Origin: </h3>
                    <span>{residentInfo?.origin.name}</span>
                </li>
                <li>
                    <h3 className='font-bold'>Times appear: </h3>
                    <span>{residentInfo?.episode.length}</span>
                    <span>{residentInfo?.episode.length>1? " times":" time"}</span>
                </li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCart